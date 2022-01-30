import React from 'react';

export const Header = ({ task }) => (
  <div className="Header">
    <p className="Header__label">
      You have {task.length < 1 ? 'no' : task.length} To Do's
    </p>
  </div>
);
