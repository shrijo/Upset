import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Nav/Nav';

const Layout = () => {
  const [menu, setMenu] = useState('closed');
  const [edit, setEdit] = useState('closed');

  const toggleMenu = () => {
    if (menu === 'closed') {
      setMenu('open');
      setEdit('closed');
    } else {
      setMenu('closed');
    }
  };
  const toggleEdit = () => {
    if (edit === 'closed') {
      setEdit('open');
      setMenu('closed');
    } else {
      setEdit('closed');
    }
  };

  return (
    <div className="Layout">
      <Nav title="Navigation" open={menu} />
      <div className="Topbar">
        <a onClick={toggleMenu}>Menu</a>
        <a onClick={toggleEdit}>Edit</a>
      </div>
      <div className="Content"></div>
      <div className="Bottombar"></div>
      <Sidebar title="Sidebar" open={edit} />
    </div>
  );
};

export default Layout;
