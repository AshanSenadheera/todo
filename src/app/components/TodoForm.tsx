// /src/app/components/TodoForm.tsx
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask({ title, status: 'In Progress' });
      setTitle('');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Enter a new task"
          className="px-2 py-1 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
