import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Button from "@mui/material/Button"
import CachedIcon from '@mui/icons-material/Cached';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const App = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [addedTaskMessage, setAddedTaskMessage] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    const newTaskText = prompt('Ingrese la nueva tarea:');
    if (newTaskText) {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setAddedTaskMessage('La tarea ha sido agregada.');
    }
  };

  const handleReset = () => {
    setTasks([]);
    setAddedTaskMessage('');
  };

  const handleEditTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (addedTaskMessage) {
      const timeoutId = setTimeout(() => {
        setAddedTaskMessage('');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [addedTaskMessage]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <div className="sidenav">
        
        {addedTaskMessage && <p>{addedTaskMessage}</p>}

        <div className='button-container'>
          <Button variant="outlined" startIcon={<PlaylistAddIcon />}
            onClick={handleAddTask}
          >
            Agregar Tarea
          </Button>
        </div>

        <TaskCounter tasks={tasks} />
        
        <div className='button-container'>
          <Button variant="outlined" startIcon={<CachedIcon />}
            onClick={handleReset}
          >
            Reiniciar
          </Button>
        </div>
      </div>

      <div className='container'>
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={handleEditTask}
        />
      </div>
      <button onClick={toggleDarkMode}>
        Cambiar Modo {darkMode ? 'Claro' : 'Oscuro'}
      </button>
    
      <Footer />
    </div>
  );
};

export default App;

