import React, { useEffect,useState } from "react";
import Profile from "../components/Profile";
import Donutgraph from "../components/Donutgraph";

const Overview = () => {

  const [data, setData] = React.useState([]);
  const [appliances, setAppliances] = useState([]);

  const fetchAppliances = async () => {
    try {
      const response = await fetch('http://localhost:3000/appliance');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setAppliances(result);
    } catch (error) {
      console.error('Error fetching appliances:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/forecast");
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
        return;
      }
      const result = await response.json();
      setData(result);
    };
    fetchData();
    fetchAppliances();
  }, []);

  const getEnergyConsumption = () => {
    if (appliances.length > 0) {
      return appliances.reduce((sum, appliance) => {
        return sum + (appliance.Wattage * appliance.Usage);
      }, 0);
    }
    return 0;
  };

  const energyConsumption = getEnergyConsumption();



  return (
    <div className="w-screen h-screen">
      <Profile />
      <div className="flex h-96 gap-5 p-2">
        <div className="flex-1">
          <h1>{data.length > 0 && data[0].date}</h1>
          <div className="border-4 border-green3 rounded-md">
            <div className="flex justify-center">
              <div className="flex-1 p-5 flex justify-end">
                <h1 className=" text-8xl">{data.length > 0 && data[0].temp}&deg;C</h1>
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center items-center">
                <img src={data.length > 0 && `${data[0].imgUrl}`} alt="" className="h-20" />
                <h2>{data.length > 0 && data[0].weather}</h2>
              </div>
            </div>
            <div className="h-72 flex justify-center items-center">
              <Donutgraph generation={data.length > 0 && data[0].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[0].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1>{data.length > 0 && data[1].date}</h1>
          <div className="border-4 border-green3 rounded-md">
            <div className="flex justify-center">
              <div className="flex-1 p-5 flex justify-end">
                <h1 className=" text-8xl">{data.length > 0 && data[1].temp}&deg;C</h1>
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center items-center">
                <img src={data.length > 0 && `${data[1].imgUrl}`} alt="" className="h-20" />
                <h2>{data.length > 0 && data[1].weather}</h2>
              </div>
            </div>
            <div className="h-72 flex justify-center items-center">
              <Donutgraph generation={data.length > 0 && data[1].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[1].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
