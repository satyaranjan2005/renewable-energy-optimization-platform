const express = require("express");
const axios = require("axios");
const env = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

//connect to db
mongoose.connect("mongodb://localhost:27017/weatherdb")
.then(() => console.log("Connected to database")).catch((err) => console.log(err)); 

//schema
const applianceSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Wattage: {
    type:Number,
    required:true
  },
  Usage: {
    type:Number,
    required:true
  }
});

const appliance = mongoose.model("Appliance", applianceSchema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const WEATHER_API_KEY = "3763eae03d5045d090b113027241912"; // Replace with your actual API key
const WEATHER_API_URL = "http://api.weatherapi.com/v1/forecast.json";

function mapWeatherCondition(condition) {
  const conditionLower = condition.toLowerCase();
  if (conditionLower.includes("sunny") || conditionLower.includes("clear")) {
    return "Sunny";
  } else if (
    conditionLower.includes("cloudy") ||
    conditionLower.includes("overcast")
  ) {
    return "Cloudy";
  } else if (
    conditionLower.includes("scattered clouds") ||
    conditionLower.includes("partly cloudy")
  ) {
    return "Scattered clouds";
  } else if (conditionLower.includes("passing clouds")) {
    return "Passing clouds";
  } else if (
    conditionLower.includes("fog") ||
    conditionLower.includes("mist") ||
    conditionLower.includes("haze")
  ) {
    return "Fog";
  } else {
    return "Passing clouds"; // Default case if none of the conditions match
  }
}

app.get("/forecast", async (req, res) => {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: WEATHER_API_KEY,
        q: "Bhubaneswar", // Replace with your actual location
        days: 15
      }
    });

    const forecastData = response.data.forecast.forecastday.map((day) => ({
      date: day.date,
      temp: day.day.avgtemp_c,
      weather: mapWeatherCondition(day.day.condition.text),
      wind: day.day.maxwind_kph,
      humidity: day.day.avghumidity,
      imgUrl: day.day.condition.icon
    }));

    const forecastPowerGeneration = await Promise.all(
      forecastData.map(async (day) => {
        const response = await axios.post("http://localhost:8000/predict", {
          temp: day.temp,
          wind: day.wind,
          humidity: day.humidity,
          weather: day.weather,
          date: day.date
        });
        return { ...day, generatedPower: response.data.prediction };
      })
    );

    res.json(forecastPowerGeneration);

    // res.json(forecastData);
  } catch (error) {
    console.log(error);

    res.status(500).send("Error fetching weather data");
  }
});

app.post("/appliance", async (req, res) => {
  const body = req.body;
  const result = await appliance.create({
    Name : body.name,
    Wattage : body.wattage,
    Usage : body.usageTime
  });

  return res.status(201).json({ "result": "sucess" });
});

app.get("/appliance", async (req, res) => {
  const result = await appliance.find({});
  return res.json(result);
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
