// src/pages/Hero.js
import React from 'react';

const Hero = () => {
  return (
    // hero-section-container memiliki min-height: 100vh dari Pages.css
    <section className="hero-section-container">
      
      {/* Container utama dengan Grid 3 kolom */}
      <div className="hero-grid-layout">
        
        {/* Kolom 1: Teks & CTA (Kiri) */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            EXPLORE YOUR TRUE <span className="creative-text">CREATIVE</span> FASHION
          </h1>
          <p className="hero-description">
            Refresh your style with on-trend pieces from clothing collection.
          </p>
          <button className="cta-button">
            Shop Now →
          </button>
        </div>

        {/* Kolom 2: Foto (Tengah) */}
        <div className="hero-image-area">
          {/* Placeholder untuk foto Anda */}
          <div className="hero-photo-placeholder">
            [Foto Model Anda]
          </div>
        </div>

        {/* Kolom 3: Komponen/Statistik (Kanan) */}
        <div className="hero-stats-area">
          
          {/* Statistik 1 */}
          <div className="stat-item">
            <div className="stat-icon-placeholder">📦</div>
            <div className="stat-details">
              <span className="stat-number">650k+</span>
              <span className="stat-label">Product Delivered</span>
            </div>
          </div>

          {/* Statistik 2 */}
          <div className="stat-item">
            <div className="stat-icon-placeholder">📍</div>
            <div className="stat-details">
              <span className="stat-number">100+</span>
              <span className="stat-label">Cities and Areas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;