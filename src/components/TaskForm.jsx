import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleAddClick = () => {
    if (newTaskText.trim() !== '') {
      onAddTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div>
      <input type="text" value={newTaskText} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;
