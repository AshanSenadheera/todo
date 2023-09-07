// /src/app/components/TodoForm.tsx
"use Client";
import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array to store tasks

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      // Add the new task to the tasks array
      setTasks([...tasks, { id: tasks.length + 1, title, status: "In Progress" }]);
      setTitle(""); // Clear the input field after adding a task
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
