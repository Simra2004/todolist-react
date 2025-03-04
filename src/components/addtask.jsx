import React, { useState } from 'react';
import './addtask.css';

export default function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className="task-input"
      />
      <button className="task-button">Add task</button>
    </form>
  );
}