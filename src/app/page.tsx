"use client";
// /src/app/page.tsx

import Image from 'next/image'
import TodoForm from './components/TodoForm'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Define a function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen ${darkMode ? 'dark' : ''}`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
        Welcome to{' '}
        <a className={`text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`} href='/'>
          ASLK Todo App!
        </a>
      </h1>
      <p className={`mt-3 text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>
        These are your tasks{' '}
      </p>
      <br />
      {/* <button
        onClick={toggleDarkMode}
        className={`${
          darkMode
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-blue-500 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
      <br />
      <TodoForm />
      <table className={`table-fixed w-full text-left border-collapse border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 dark:border-gray-700' : 'bg-white'}`}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                <button
                  onClick={() => handleEdit(task.id)}
                  className={`${
                    darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className={`${
                    darkMode ? 'bg-red-800 hover:bg-red-700' : 'bg-red-500 hover:bg-red-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleComplete(task.id)}
                  className={`${
                    darkMode ? 'bg-green-800 hover:bg-green-700' : 'bg-green-500 hover:bg-green-700'
                  } text-white font-bold py-1 px-2 rounded mx-1`}
                >
                  Mark Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
