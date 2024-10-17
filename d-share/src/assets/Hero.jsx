import React, { useEffect, useRef } from 'react';
import '../Hero.scss';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Autoplay was prevented:", error);
        });
      }
    };

    playVideo();

    document.addEventListener('touchstart', playVideo, { once: true });

    return () => {
      document.removeEventListener('touchstart', playVideo);
    };
  }, []);

  return (
    <div className="hero">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="background-video"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>D-SHARE</h1>
        <p id='Refefining'>Redefining Trust in Every Transaction</p>
        <p id='D-Share'>D-Share streamlines and secures business deals with escrowed payments released upon agreed conditions.</p>
      </div>
    </div>
  );
};

export default Hero;