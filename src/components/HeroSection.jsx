import React from 'react';
import '../assets/styles/Header.css' // Fichier CSS séparé pour les styles

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Solutions Professionnelles <br />
          <span className="highlight">Adaptées À Vos</span> <br />
          Besoins Et Objectifs
        </h1>
        <p className="subtitle">
          Solutions professionnelles adaptées à vos <br /> besoins et objectifs
        </p>
        <div className="cta-button">
          <button className="button">
            Commencez <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;