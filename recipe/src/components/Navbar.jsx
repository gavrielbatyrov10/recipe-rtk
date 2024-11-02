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

  const handleLinkClick = () => {
    setDropdownOpen(false); // Close dropdown on link click
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
              <div
                className={`dropdown ${isClosing ? 'fade-up' : ''}`}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-content">
                  <a href="#mac" onClick={handleLinkClick}>Home</a>
                  <a href="#ipad" onClick={handleLinkClick}>Hover Link</a>
                  <a href="#iphone" onClick={handleLinkClick}>Link</a>
                  <a href="#watch" onClick={handleLinkClick}>Link</a>
                  <a href="#airpods" onClick={handleLinkClick}>Link</a>
                </div>
              </div>
            )}
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Blur overlay */}
      {isDropdownOpen && (
        <div className="blur-overlay" onClick={() => setDropdownOpen(false)}></div>
      )}
    </div>
  );
};

export default Navbar;
