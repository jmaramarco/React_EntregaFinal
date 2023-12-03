import React, { useState } from 'react';
import CardView from './CardView';
import TaskEditor from './TaskEditor';

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveEdit = (editedText) => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="task-item-container">
    {isEditing ? (
      <TaskEditor
        initialText={task.text}
        onSave={handleSaveEdit}
        onCancel={() => setIsEditing(false)}
      />
    ) : (
      <CardView
        task={task}
        onToggleComplete={onToggleComplete}
        onEdit={() => setIsEditing(true)}
        onDelete={onDelete}
      />
    )}
  </div>
  );
};

export default TaskItem;
