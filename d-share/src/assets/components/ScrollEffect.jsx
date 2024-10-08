// src/assets/ScrollEffect.js
import React, { useEffect } from 'react';

const ScrollEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const hero = document.querySelector('.hero');
            const about = document.querySelector('.about');

            // Imposta il movimento inverso per la sezione Hero
            if (hero) {
                hero.style.transform = `translateY(${scrollY * 0.5}px)`; // Regola il fattore per l'effetto desiderato
            }

            // Se vuoi muovere anche About in modo diverso
            if (about) {
                about.style.transform = `translateY(${scrollY * 0.3}px)`; // Regola il fattore per l'effetto desiderato
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // Non restituiamo nulla perché questo componente non rende niente
};

export default ScrollEffect;
