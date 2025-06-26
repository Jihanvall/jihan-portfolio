import React, { useState} from "react";
import './Navbar.css'
function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const toggleMenu=() => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="brand"><span>J</span>ihan Vall</div>
  
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
          <div className="burger" onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </nav>
  );
}


export default Navbar;

