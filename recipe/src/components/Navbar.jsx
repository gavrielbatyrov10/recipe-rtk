import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
    setIsClosing(false); // Reset closing state when opening
  };

  const handleMouseLeave = () => {
    setIsClosing(true); // Trigger fade-up animation
    setTimeout(() => setDropdownOpen(false), 500); // Wait for animation to complete
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a
            href="#products"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="dropdown-link"
          >
            Products
            {isDropdownOpen && (
              <div className={`dropdown ${isClosing ? 'fade-up' : ''}`} onMouseLeave={handleMouseLeave}>
                <div className="dropdown-content">
                  <a href="#mac">Home</a>
                  <a href="#ipad">Hover Link</a>
                  <a href="#iphone">link</a>
                  <a href="#watch">Link</a>
                  <a href="#airpods">Link</a>
                </div>
              </div>
            )}
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Blur overlay */}
      {isDropdownOpen && <div className="blur-overlay" onClick={() => setDropdownOpen(false)}></div>}

      {/* Main content */}
      <main className="content">
        <section className="page-section">Content Section 1</section>
        <section className="page-section">Content Section 2</section>
        <section className="page-section">Content Section 3</section>
      </main>
    </div>
  );
};

export default Navbar;
