import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Brand</div>
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#products" className="dropdown-link">Products</a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#product1">Product 1</a>
                <a href="#product2">Product 2</a>
                <a href="#product3">Product 3</a>
              </div>
            )}
          </div>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="navbar-cta">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
