import { useState } from 'react'
import TodoList from './components/todolist';
import AddTask from './components/addtask';
// import WeatherWidget from './components/weather';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* <WeatherWidget /> */}
      <h1 className="title">TO DO NOW</h1>
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}