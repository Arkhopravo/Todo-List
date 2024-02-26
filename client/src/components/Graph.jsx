import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { FaInfoCircle } from "react-icons/fa";

const Graph = () => {
  return (
    <div className=' ml-40 sm:ml-28 md:ml-20 py-6 mt-10 text-sm bg-slate-100 md:w-full h-1/4 md:h-full'>
      <h1 className="items-center pl-6 font-bold text-sm sm:text-l flex justify-between ">
        Prioritize task done grap
        <FaInfoCircle className='mr-8' />
      </h1>
      <BarChart 
  xAxis={[{ scaleType: 'band', data: ['first quarter', '2nd quarter', 'third quarter'] }]}
  
  series={[
    { data: [4,3,5], stack: 'A', label: 'P1' },
    { data: [1,6,3], stack: 'B', label: 'P2' },
    { data: [2,7,5], stack: 'C', label: 'P3' },

    ]}
   
  height={200}
  width={400}
  
/>
    </div>
  )
}

export default Graph