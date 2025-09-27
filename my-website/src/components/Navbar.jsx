import React from 'react';
import selfPic from '../images/self.jpeg';
import '../styles/Navbar.css';
import Navicons from './Navicons';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={selfPic} alt='mypic' />
      <div className='navbaritems'>
        <a href='#projects'>Projects</a>
        <a href='#aboutme'>About Me</a>
        <a href='#qualifications'>Qualifications</a>
        <a href='#contact'>Contact</a>
      </div>
      <Navicons />
    </div>
  );
};

export default Navbar;
