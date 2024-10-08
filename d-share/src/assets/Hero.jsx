// src/Hero.jsx
import React from 'react';
import '../Hero.css'; // Importa il CSS per lo stile
import video from './components/video/video.mp4'; // Importa il video

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" /> {/* Usa la variabile video */}
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to D-Share</h1>
        <p>Your all-in-one solution for secure and automated transactions.</p>
        <p>Simplify your business operations with our advanced escrow services and ensure trust throughout the process.</p>
        {/* <a href="#launch-app" className="cta-button">Launch App</a> */}
      </div>
    </div>
  );
};

export default Hero;
