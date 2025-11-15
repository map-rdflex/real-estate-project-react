import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>General Project</h2>
        </div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => handleClick(e, 'services')}>Services</a>
          <a href="#team" onClick={(e) => handleClick(e, 'team')}>Find a Team</a>
          <a href="#about" onClick={(e) => handleClick(e, 'about')}>About Us</a>
          <a href="#articles" onClick={(e) => handleClick(e, 'articles')}>Articles</a>
          <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')}>Portfolio</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
