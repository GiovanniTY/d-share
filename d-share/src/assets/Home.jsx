/* import React, { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "./components/NavBar";
import Hero from "./Hero";
import EscrowAsAService from "./components/Escrow-as-a-Service";
import Web3Solutions from './components/Web3Solutions';
import Why from './components/Why-D-Share';
import BusinessCase from './components/BusinessCase';
import About from './components/About';
import Footer from './components/Footer';
import '../index.scss';

export default function Home() {
  const [heroHeight, setHeroHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!isMobile) {
      setScrollY(window.scrollY);
    }
  }, [isMobile]);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = sectionsRef.current?.children;
    if (sections) {
      Array.from(sections).forEach((section) => {
        observer.observe(section);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (sections) {
        Array.from(sections).forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, [handleScroll, handleResize]);

  return (
    <div className={`home-container ${isMobile ? 'mobile' : ''}`}>
      <Navbar className={scrollY > 50 ? 'navbar-scrolled' : ''} />
      <div 
        ref={heroRef} 
        className="hero-container" 
        style={{ height: '100vh' }}
      >
        <Hero />
      </div>
      <div 
        ref={sectionsRef} 
        className="sections-container" 
        style={isMobile ? {} : { marginTop: `${heroHeight}px` }}
      >
        <EscrowAsAService />
        <Web3Solutions />
        <Why />
        <BusinessCase />
        <div className="about-footer-container">
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
} */