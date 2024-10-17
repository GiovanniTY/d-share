import React, { useEffect, useRef, useState } from "react";
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
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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
      if (sections) {
        Array.from(sections).forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div className="parallax-container">
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
        style={{ marginTop: `${heroHeight}px` }}
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
}