import React, { useRef, useEffect, useState } from 'react';
import Hero from '../Hero';
import EscrowAsAService from './Escrow-as-a-Service';
import '../../Escrow-as-a-Service.scss';
import '../../Hero.scss';
import Navbar from './NavBar';
import '../../HomePage.scss';


// Parametri regolabili
const SCROLL_START = 0.0; // Quando iniziare l'effetto (0.1 = 10% dello scroll)
const SCROLL_DURATION = 0.1; // Durata dell'effetto (0.5 = 50% dello scroll)

export default function HomePage() {
  const heroRef = useRef(null);
  const escrowRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && escrowRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight - windowHeight;
        
        const scrollPercentage = scrollPosition / fullHeight;
        const progress = Math.max(0, Math.min(1, (scrollPercentage - SCROLL_START) / SCROLL_DURATION));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
        <Navbar/>
      <div ref={heroRef} className="hero-wrapper">
        <Hero />
      </div>
      <div 
        ref={escrowRef} 
        className="escrow-wrapper" 
        style={{ transform: `translateY(${100 - scrollProgress * 100}%)` }}
      >
        <EscrowAsAService />
      </div>
    </div>
  );
}