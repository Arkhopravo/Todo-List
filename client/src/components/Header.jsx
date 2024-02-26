import React from 'react'
import RealTimeClock from './RealTimeClock'



const Header = () => {
  return (
    <nav className='h-40 pt-4 pl-4 bg-indigo-950 bg-opacity-100 rounded-lg shadow-xl'>
        
    <RealTimeClock/>
    
    </nav>
  )
}

export default Header