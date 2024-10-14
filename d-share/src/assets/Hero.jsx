// src/Hero.jsx
import React from 'react';
import '../Hero.scss'; // Importa il CSS per lo stile
import video from './components/video/video.mp4'; // Importa il video

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>D-SHARE</h1>
        <p id='Refefining'>Redefining Trust in Every Transaction</p>
        <p id='D-Share'>D-Share streamlines and secures business deals with escrowed payments released upon agreed conditions.</p>
        {/* <a href="#launch-app" className="cta-button">Launch App</a> */}
      </div>
    </div>
  );
};

export default Hero;
