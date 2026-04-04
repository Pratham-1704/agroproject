import React from 'react';
import heroBg from '../images/products/p4.png';
import logo from '../images/products/logo.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <div className="logo-container">
          <img src={logo} alt="Sandhya Agro Logo" className="logo-image" />
        </div>
        <p className="tagline">Pure Quality from Indian Agriculture<br /></p>
        <a href="#about-us" className="know-more-btn">
          <span>Know More</span>
          <span className="arrow">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
