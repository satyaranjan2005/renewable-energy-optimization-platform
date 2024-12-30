import React,{useState,useEffect} from 'react'
import Profile from '../components/Profile'

const Consumption = () => {

  const [name, setName] = useState('');
  const [wattage, setWattage] = useState('');
  const [usageTime, setUsageTime] = useState('');
  const [appliances, setAppliances] = useState([]);

  const handleAddAppliance = async () => {
    const appliance = { name: name, wattage: wattage, usageTime: usageTime };

    try {
      const response = await fetch('http://localhost:3000/appliance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appliance),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Appliance added:', result);
      // Optionally, clear the form fields or update the state to reflect the new appliance
      setName('');
      setWattage('');
      setUsageTime('');
    } catch (error) {
      console.error('Error adding appliance:', error);
    }
    fetchAppliances();
  };

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
      <Profile/>
      <div className='w-11/12 border-4 border-green3 p-5 flex flex-col gap-5'>
        <h1 className='font-semibold text-lg'>Add Appliances</h1>
        <div className='border-2 p-2 flex gap-8 rounded items-center' >
          <label htmlFor="name">
            Appliance Name:
            <input type="text" name="name" id="name" className='border-2' value={name}
              onChange={(e) => setName(e.target.value)}/>
          </label>
          <label htmlFor="wattage">
            Wattage:
            <input type="text" name="wattage" id="wattage" className='border-2'value={wattage}
              onChange={(e) => setWattage(e.target.value)}/>
          </label>
          <label htmlFor="usageTime">
            Usage Time:
            <input type="text" name="usageTime" id="usageTime" className='border-2'value={usageTime}
              onChange={(e) => setUsageTime(e.target.value)}/>
          </label>
          <button className='bg-green2 w-20 h-8 text-white rounded' onClick={handleAddAppliance}>ADD</button>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold border-b-2'>Appliances</h2>
            <ul>
            {appliances.length > 0 && appliances.map((appliance, index) => (
                <li key={index}>{appliance.Name} </li>
              ))}
            </ul>
            <h2 className='font-bold border-t-2'>Total</h2>
          </div>
          <div className='flex flex-col gap-2 '>
          <h2 className='font-bold border-b-2'>Energy Usage</h2>
            <ul>
            {appliances.length > 0 && appliances.map((appliance, index) => (
                <li key={index}>{appliance.Wattage * appliance.Usage}</li>
              ))}
            </ul>
            <h2 className='font-bold border-t-2'>{energyConsumption}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consumption
