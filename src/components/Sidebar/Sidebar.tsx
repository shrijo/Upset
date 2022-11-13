import React from 'react';
import './styles.css';

const Sidebar = (props) => {
  return (
    <div className="Sidebar" id={props.open}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Sidebar;
