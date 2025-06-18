import { useState } from 'react';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand"><span>J</span>ihan Vall</div>
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}


export default Navbar;

