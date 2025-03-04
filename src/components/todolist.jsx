import React from 'react';
import TodoItem from './doitem';

export default function TodoList({ tasks, removeTask }) {
  return (
    <ul className="w-1/2">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} removeTask={removeTask} />
      ))}
    </ul>
  );
}
