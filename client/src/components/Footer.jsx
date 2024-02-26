import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Footer = () => {
  const [value, setValue] = useState('home');
  const [showTodoList, setShowTodoList] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddTaskClick = () => {
    setShowTodoList(true);
  };

  return (
    <div className="h-full md:rounded-lg md:shadow-lg md:ml-4 bg-white md:mt-20 md:pt-0 pt-0 pb-2 -mt-16 md:pb-28">
      {showTodoList && <TodoList onClose={() => setShowTodoList(false)} />}
      <div className="flex mt-60 justify-center items-center h-full">
        <BottomNavigation
          className="flex sm:flex-col w-full"
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="add task"
            value="add task"
            icon={<AddTwoToneIcon style={{ width: '20px', height: '20px' }} className="bg-gray-300 rounded-sm shadow-lg" />}
            onClick={handleAddTaskClick}
          />
          <BottomNavigationAction
            label="home"
            value="home"
            icon={<HomeTwoToneIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
          <BottomNavigationAction
            label="alert"
            value="alert"
            icon={<NotificationsNoneTwoToneIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
          <BottomNavigationAction
            label="logout"
            value="logout"
            icon={<LogoutRoundedIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

// const TodoList = ({ onClose }) => {
//   // Implement todo list functionality here
//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-4">
//         {/* Todo list form and content */}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };



const TodoList = ({ onClose }) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-80">
        <h2 className="text-xl font-bold mb-4">Todo List</h2>
        <div className="flex items-center border-b-2 border-gray-200 pb-2 mb-4">
          <input
            value={taskInput}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <li key={index} className="py-2">
              <span className="text-gray-800">{task}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};




export default Footer;
