import React from 'react'
import Task from './Task'

const ToDoList = () => {
  return (
    <div className='md:flex md:pl-4'>
        <div className='p-4'>
        <Task/>
        <Task/>

        </div>
        <div className='p-4 '>

        <Task/>
        <Task/>
        </div>
    </div>
  )
}

export default ToDoList