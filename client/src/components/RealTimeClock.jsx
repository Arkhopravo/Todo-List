
import React, { useState, useEffect } from 'react';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const RealTimeClock = ({user}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalID); // Cleanup interval on unmount
  }, []); // Run effect only once on component mount

  return ( 
  
//   <div className="max-w-xs mx-auto  bg-gray-100 rounded-lg shadow-lg p-4 justify-start">
//   <h2 className="text-xl font-bold mb-4">Digital Clock</h2>
//   <p className="text-3xl font-semibold flex justify-start items-start">{time.toLocaleTimeString()}</p>

    
<div >
 <div className='max-w-xs bg-gray-200 rounded-lg shadow-xl p-4 justify-start'>
    <h1 className='text-l sm:text-l md:text-l font-bold mb-0 sm:mb-2 md:mb-4 mt-0 sm:mt-2 md:mt-4'>Hello Arkhopravo, Goodmorning🌞 </h1>
        <div className='flex items-center'>
            {/* <HourglassBottomIcon className="h-8 w-10 mr-2" /> */}
            <p className="text-l md:text-3xl font-semibold ">{time.toLocaleTimeString()}</p>
        </div>

 </div>
</div>

  );
};



export default RealTimeClock