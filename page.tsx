// /src/app/page.tsx
"use client";
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const editTask = (taskId, updatedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'In Progress' ? 'Completed' : 'In Progress' }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold">
        Welcome to{' '}
        <a className={`text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`} href="/">
          ASLK Todo App!
        </a>
      </h1>
      <p className="mt-3 text-2xl">These are your tasks</p>
      <br />
      <button
        onClick={toggleDarkMode}
        className={`${
          darkMode
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-blue-500 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <br />
      <TodoForm addTask={addTask} />
      <table className={`table-fixed w-full text-left border-collapse border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Task</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-4 py-2">{task.id}</td>
              <td className="px-4 py-2">{task.title}</td>
              <td className="px-4 py-2">{task.status}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => editTask(task.id, prompt('Edit task:', task.title))}
                  className={`${
                    darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className={`${
                    darkMode ? 'bg-red-800 hover:bg-red-700' : 'bg-red-500 hover:bg-red-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`${
                    darkMode ? 'bg-green-800 hover:bg-green-700' : 'bg-green-500 hover:bg-green-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  {task.status === 'In Progress' ? 'Mark Complete' : 'Mark In Progress'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
