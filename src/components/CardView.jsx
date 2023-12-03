import React from 'react';
import Card from './Card';

const CardView = ({ task, onToggleComplete, onEdit, onDelete }) => {
  return (
    <div className="task-container">
      <Card
        task={task}
        onToggleComplete={onToggleComplete}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default CardView;
