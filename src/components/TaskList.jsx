import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} >
          <TaskItem
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </>
  );
};

export default TaskList;

