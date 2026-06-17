import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">R.K.R</div>
      <div
        id="nav-links"
        className={!isOpen ? "nav-links" : "nav-links active"}
      >
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div
        id="nav-toggle-close"
        className={!isOpen ? "cross" : "sign"}
        onClick={() => setisOpen(!isOpen)}
      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
