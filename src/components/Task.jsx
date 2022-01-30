import React from 'react';

export const Task = ({ task, index, openModel, setTaskToDelete }) => (
  <div className="Task">
    <p key={index} className="Task__name">
      {task}
    </p>

    <button
      className="Task__delete"
      onClick={() => {
        openModel();
        setTaskToDelete(task);
      }}
    ></button>
  </div>
);
