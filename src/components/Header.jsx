import React from 'react';
import '../assets/styles/Header.css'// Importation du CSS pour les animations

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#services">Services</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta">
        <button className="button">
          Nos RDV <span className="arrow">→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;