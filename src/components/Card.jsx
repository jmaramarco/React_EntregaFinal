import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0b6506', // Cambia el color principal del botón
    },
    secondary: {
      main: '#a0190d', // Cambia el color secundario del botón
    },
  },
});

const Card = ({ task, onToggleComplete, onEdit, onDelete }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h3 style={{ color: task.completed ? '#0b6506' : '#a0190d' }}>
        {task.text}
      </h3>
      <div className='button-container'>
            
        <IconButton 
          aria-label="Complete"
          title="Tarea Completada"
          color="primary"
          onClick={() => onToggleComplete(task.id)}
          disabled={task.completed}>
          <CheckIcon />
        </IconButton>

        <IconButton 
          aria-label="Edit"
          title="Editar Tarea"
          onClick={() => onEdit(task.id)}
          disabled={task.completed}>
          <EditIcon />
        </IconButton>
        
        <IconButton 
          aria-label="Delete"
          color="secondary"
          title="Eliminar Tarea"
          onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ThemeProvider>
  );
}

export default Card;
