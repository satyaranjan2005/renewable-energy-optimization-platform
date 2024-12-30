import React,{useEffect,useState} from "react";
import Profile from "../components/Profile";
import BarGraph from "../components/BarGraph";


const Statistics = () => {
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
      <div className="flex flex-wrap gap-2">
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[0].date}
            <img src={data.length > 0 && `${data[0].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[0].temp}&deg;C</h1>
            <p>{data.length > 0 && data[0].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
              <BarGraph generated={data.length > 0 && data[0].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[0].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[1].date}
            <img src={data.length > 0 && `${data[1].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[1].temp}&deg;C</h1>
            <p>{data.length > 0 && data[1].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[1].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[1].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[2].date}
            <img src={data.length > 0 && `${data[2].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[2].temp}&deg;C</h1>
            <p>{data.length > 0 && data[2].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[2].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[2].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[3].date}
            <img src={data.length > 0 && `${data[3].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[3].temp}&deg;C</h1>
            <p>{data.length > 0 && data[3].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[3].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[3].generatedPower - energyConsumption : 0}/>
            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[4].date}
            <img src={data.length > 0 && `${data[4].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[4].temp}&deg;C</h1>
            <p>{data.length > 0 && data[4].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[4].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[4].generatedPower - energyConsumption : 0}/>            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[5].date}
            <img src={data.length > 0 && `${data[5].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[5].temp}&deg;C</h1>
            <p>{data.length > 0 && data[5].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[5].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[5].generatedPower - energyConsumption : 0}/>            </div>
          </div>
        </div>
        <div className="flex border-4 border-green3 p-2 gap-5">
          <div className="flex-1 p-2 flex flex-col items-center">
            {data.length > 0 && data[6].date}
            <img src={data.length > 0 && `${data[6].imgUrl}`} alt="" className="h-10" />
            <h1 className="text-4xl">{data.length > 0 && data[6].temp}&deg;C</h1>
            <p>{data.length > 0 && data[6].weather}</p>
          </div>
          <div className="flex-1">
            <div className="w-56 h-36">
            <BarGraph generated={data.length > 0 && data[6].generatedPower} consumption={energyConsumption}
                save={data.length > 0 ? data[6].generatedPower - energyConsumption : 0}/>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Statistics;