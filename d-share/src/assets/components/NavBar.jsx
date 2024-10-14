// src/Navbar.jsx
import React from 'react';
import '../../NavBar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">D-Share</h1>
        <div className="nav-links">
          <a href="#launch-app">Launch App</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
