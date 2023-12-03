import React, { useState } from 'react';
import Button from "@mui/material/Button"
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


const TaskEditor = ({ initialText, onSave, onCancel }) => {
  const [editedText, setEditedText] = useState(initialText);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(editedText);
  };

  return (
    <>
      <textarea
        value={editedText}
        onChange={handleInputChange}
        style={{ width: '100%', minHeight: '40px' }}
      />
      <div className="button-container">
        <Button variant="outlined" startIcon={<SaveIcon />}
          onClick={handleSaveClick}
        >
          Guardar
        </Button>
        <Button variant="outlined" startIcon={<CancelIcon />}
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </>
  );
};

export default TaskEditor;
