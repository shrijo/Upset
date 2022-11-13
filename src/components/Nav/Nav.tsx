import React from 'react';
import './styles.css';

const Nav = (props, { children }) => {
  return (
    <div className="Nav" id={props.open}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Nav;
