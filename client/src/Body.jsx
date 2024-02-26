import React,{useState} from 'react'
import CalenderApp from './components/CalenderApp'
import Graph from './components/Graph'
import Task from './components/Task'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'
import Mapitems from './components/Mapitems'
import Map from './components/Map'


const Body = () => {
  const [isToDoListOpen, setIsToDoListOpen] = useState(false);

  const toggleToDoList = () => {
    setIsToDoListOpen(!isToDoListOpen);
  };

    const handleAddTaskClick = () => {
        setShowTodoList(true);
      };
    
    

  return (
    <div>
          <div className=" md:flex-row-reverse md:flex">
           
     
        

          <div className="w-2/3 p-4">
            <div className="flex flex-wrap items-center justify-center p-4 ">
                
                <CalenderApp className="w-1/2" />  
                <Graph className="w-1/2" />
                
                {/* <Mapitems className="w-full" /> */}
                <Map className="w-1/2" />
            </div>

          </div>
          
          <div className=" md:w-2/3 md:p-4">
            {/* <ToDoList/> */}
            {isToDoListOpen && <ToDoList />}
            <Task/>
            </div>
      <Footer  toggleToDoList={toggleToDoList}/>
      </div>
    </div>
  )
}



export default Body