import React from 'react';
import { Link } from 'react-router-dom';
import '../../NavBar.scss';
import logoImage from '../../../public/logo/logodshare-vecto.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={logoImage}
              alt="D-Share Logo"
              className="logo-image"
            />
          </Link>
        </div>
        <div className="nav-links">
          <a href="https://app.d-share.io/dashboard">LAUNCH APP</a>
        </div>
      </div>
    </nav>
  );
}