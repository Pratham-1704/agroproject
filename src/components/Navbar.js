import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-us', 'vision-mission', 'why-us', 'products', 'export', 'contact-us'];
      const scrollY = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#home" className="brand-name" onClick={() => handleLinkClick('home')}>Sandhya Agro</a>
        <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</a></li>
          <li><a href="#about-us" className={`nav-link ${activeLink === 'about-us' ? 'active' : ''}`} onClick={() => handleLinkClick('about-us')}>About Us</a></li>
          <li><a href="#vision-mission" className={`nav-link ${activeLink === 'vision-mission' ? 'active' : ''}`} onClick={() => handleLinkClick('vision-mission')}>Vision & Mission</a></li>
          <li><a href="#why-us" className={`nav-link ${activeLink === 'why-us' ? 'active' : ''}`} onClick={() => handleLinkClick('why-us')}>Why Us</a></li>
          <li><a href="#products" className={`nav-link ${activeLink === 'products' ? 'active' : ''}`} onClick={() => handleLinkClick('products')}>Products</a></li>
          <li><a href="#export" className={`nav-link ${activeLink === 'export' ? 'active' : ''}`} onClick={() => handleLinkClick('export')}>Export</a></li>
          <li><a href="#contact-us" className={`nav-link ${activeLink === 'contact-us' ? 'active' : ''}`} onClick={() => handleLinkClick('contact-us')}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
