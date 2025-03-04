import React from 'react';
import './doitem.css';

export default function TodoItem({ task, index, removeTask }) {
  return (
    <li className="todo-item">
      {task}
      <button onClick={() => removeTask(index)} className="delete-button">🗑️</button>
    </li>
  );
}