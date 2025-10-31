// src/components/Header.js
import React from 'react';

// Komponen menerima props: currentPage (state saat ini) dan handlePageChange (fungsi pengubah state)
const Header = ({ currentPage, handlePageChange }) => {
  const navItems = ["About", "Resume", "Portfolio","Certifications", "Contact"];

  // handleNavClick sekarang hanya memanggil fungsi prop yang diberikan oleh App.js
  const handleNavClick = (item) => {
    handlePageChange(item);
  };

  return (
    <header className="header-sidebar">
      <div className="profile-info">
        <div className="avatar">PWP</div>
        <h1 className="profile-name">Panji Wirya Pastika</h1>
        <p>Software Quality Assurance</p>
      </div>

      <nav className="main-nav">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item} 
              // Penyesuaian: Gunakan currentPage dari props untuk menentukan kelas aktif
              className={currentPage === item ? "activeLink" : ""} 
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="social-links">
        {/* Pastikan href memiliki https:// atau http:// agar berfungsi sebagai link luar */}
        <a href="https://github.com/panjiwp" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://linkedin.com/in/panjiwp" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="https://instagram.com/panjiwp" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
      </div>
    </header>
  );
};

export default Header;