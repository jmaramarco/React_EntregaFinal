import React, { useState, useEffect } from 'react';

const TaskCounter = ({ tasks }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    const pendingTasks = tasks.filter((task) => !task.completed);

    setCompletedCount(completedTasks.length);
    setPendingCount(pendingTasks.length);
    setTotalCount(tasks.length);
  }, [tasks]);

  return (
    <div>
      <p>Total de Tareas: {totalCount}</p>
      <p>Tareas Pendientes: {pendingCount}</p>
      <p>Tareas Completadas: {completedCount}</p>
    </div>
  );
};

export default TaskCounter;
