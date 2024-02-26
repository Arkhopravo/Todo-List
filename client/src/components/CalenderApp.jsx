import React,{useState} from 'react'

import {DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import dayjs from 'dayjs';


const CalenderApp = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='bg-white shadow-lg rounded-2xl '>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={dayjs(new Date())} />
      {/* <DateCalendar /> */}
  </LocalizationProvider>
    </div>

  )
}

export default CalenderApp