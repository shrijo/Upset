import React from 'react';
import './styles.css';

const Nav = (props: any) => {
  return (
    <div className="Nav" id={props.open}>
      <h2>Navigation</h2>
    </div>
  );
};

export default Nav;
