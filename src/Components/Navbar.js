// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navbar.css';
import logo from '../logo.jpeg';

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">

      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

        <Link to="/" className="navbar-logo">
          
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
