import React from 'react';
import './styles.css';

const Nav = (props) => {
  return (
    <div className="Nav" id={props.open}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Nav;
