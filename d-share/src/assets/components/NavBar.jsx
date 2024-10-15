import React from 'react';
import '../../NavBar.scss';
import logoImage from '../../../public/logo/logodshare-vecto.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={logoImage}
            alt="D-Share Logo"
            className="logo-image"
          />
        </div>
        <div className="nav-links">
          <a href="#launch-app">Launch App</a>
        </div>
      </div>
    </nav>
  );
}