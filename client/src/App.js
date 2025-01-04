import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css'
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
