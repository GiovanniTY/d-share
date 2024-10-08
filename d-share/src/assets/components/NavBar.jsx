// src/Navbar.jsx
import React from 'react';
import '../../NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">D-Share</h1>
        <div className="nav-links">
          <a href="#launch-app">Launch App</a>
          <a href="#launch-testnet">Launch Testnet</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
