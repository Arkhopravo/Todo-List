import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [createdForDate, setCreatedForDate] = useState('');
  const [taskList, setTaskList] = useState([{ title: '', priority: '' }]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    try {
      const response = await axios.get('http://172.178.104.95/main/get');
      setTodoList(response.data);
    } catch (error) {
      console.error('Error fetching todo list:', error);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post('http://172.178.104.95/main/create', {
        todo_name: todoName,
        created_for_date: createdForDate,
        task_list: taskList,
      });
      fetchTodoList();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://172.178.104.95/main/delete`);
      fetchTodoList();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodo = async (id) => {
    try {
      await axios.post(`http://172.178.104.95/main/update`, {
        todo_name: todoName,
        created_for_date: createdForDate,
        task_list: taskList,
      });
      fetchTodoList();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleTaskChange = (index, key, value) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index][key] = value;
    setTaskList(updatedTaskList);
  };

  const addTask = () => {
    setTaskList([...taskList, { title: '', priority: '' }]);
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
     <div className="container bg-slate-300 shadow-xl rounded-lg mx-auto p-4">
      <h1 className="md:text-2xl text-xl font-serif  font-bold mb-4">ToDo List</h1>
      <div className="mb-8">
        <h2 className="md:text-xl text-sm font-serif font-bold mb-2">Add Todo</h2>
        <input
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="border rounded-md border-gray-300 px-3 py-2 rounded mr-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="date"
          placeholder="Created For Date"
          value={createdForDate}
          onChange={(e) => setCreatedForDate(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded mr-2 focus:outline-none focus:border-blue-500"
        />
        <button onClick={addTask} className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:from-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white">
          Add Task
        </button>
        {taskList.map((task, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              placeholder="Task Title"
              value={task.title}
              onChange={(e) => handleTaskChange(index, 'title', e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded mr-2 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Task Priority"
              value={task.priority}
              onChange={(e) => handleTaskChange(index, 'priority', e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded mr-2 focus:outline-none focus:border-indigo-500"
            />
            <button onClick={() => removeTask(index)} className="bg-gradient-to-r from-red-500 to-red-600 text-white mt-2 px-6 py-3 rounded-full shadow-md hover:from-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white">
              Remove Task
            </button>
          </div>
        ))}
        <button onClick={addTodo} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 mt-2 items-center rounded-full shadow-md hover:from-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
          Add Todo
        </button>
      </div>
      <div>{/* Display your formatted todo list here */}</div>
    </div>
  );
}

export default ToDoList;
