import React, { useState, useEffect } from 'react';
import './Banner.css';
import {FiMenu, FiX } from 'react-icons/fi';

const banners = [
  {
    image: '/images/banner2.png',
    tagline: 'Savor Every Occasion',
    headline: 'Delicious Catering Crafted\n For Memorable Moments',
  },
  {
    image: '/images/banner3.png',
    tagline: 'Flavors that Celebrate',
    headline: 'Exquisite Cuisine for\n Every Celebration',
  },
];

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { image, tagline, headline } = banners[currentImageIndex];

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className="header">
        <div className="logo-section">
          <img src="/images/logo.png" alt="classic kitchen" className="logo" />
          <span className="brand-name">The Classic Kitchen</span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <a href="/">Home</a>
        <a href="#menu">Menu</a>
        <a href="#events">Events</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </header>

      <div
        className={`hero-text animate-slide-up ${
          currentImageIndex === 1 ? 'right-align' : 'left-align'
        }`}
      >
        <p className="tagline animate-fade-in">{tagline}</p>
        <h1>{headline}</h1>
      </div>
      

      <div className="scroll-down" onClick={() => {
        const nextSection = document.getElementById('offer'); 
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
  <div className="mouse-shape">
    <div className="scroll-dot"></div>
  </div>
</div>


    </section>
  );
};

export default Banner;
