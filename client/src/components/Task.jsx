import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = () => {
  const [formattedTodoList, setFormattedTodoList] = useState([]);

  useEffect(() => {
    fetchFormattedTodoList();
  }, []);

  const fetchFormattedTodoList = async () => {
    try {
      const response = await axios.get('http://172.178.104.95/main/get');
      const formattedTodoList = response.data.map(todo => {
        return {
          todo_name: todo.todo_name,
          created_for_date: todo.created_for_date,
          task_list: todo.task_list.map(task => {
            return {
              title: task.title,
              priority: task.priority || "",
              id: task.id // Assuming each task has a unique identifier
            };
          })
        };
      });
      setFormattedTodoList(formattedTodoList);
    } catch (error) {
      console.error('Error fetching todo list:', error);
    }
  };

  const updateTask = async (taskId, newTitle, newPriority) => {
    try {
      await axios.put('http://172.178.104.95/main/update', {
        taskId,
        newTitle,
        newPriority
      });
      // Update UI after successful update
      fetchFormattedTodoList();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://172.178.104.95/main/delete/`);
      // Update UI after successful deletion
      fetchFormattedTodoList();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container  font-mono mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <div className="bg-white shadow-2xl ">
        
        <ul className="space-y-4">
          {formattedTodoList.map((todo, index) => (
            <li key={index} className="p-4 border border-none bg-slate-300 shadow-2xl rounded-lg">
              <strong>Todo Name:</strong> {todo.todo_name}<br />
              <strong>Created For Date:</strong> {todo.created_for_date}<br />
              <strong>Task List:</strong>
              <ul className="list-disc text-balance text-yellow-950 ml-8 space-y-2">
                {todo.task_list.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-center">
                    <span className="mr-2">{task.title} - Priority: {task.priority}</span>
                    <button className="ml-auto rounded-xl shadow-xl bg-indigo-900 hover:bg-slate-500 text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline" onClick={() => updateTask(task.id, 'New Title', 'New Priority')}>
                      Update
                    </button>
                    <button className="ml-2 bg-black rounded-md shadow-xl hover:bg-red-700 text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline" onClick={() => deleteTask(task.id)}>
                      Delete {task.id = 1}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task;
