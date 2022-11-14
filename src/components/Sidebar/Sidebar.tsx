import React from 'react';
import './styles.css';

const Sidebar = (props: any) => {
  return (
    <div className="Sidebar" id={props.open}>
      <h2>Sidebar</h2>
    </div>
  );
};

export default Sidebar;
