// src/components/Header.js
import React from 'react';

// Komponen menerima props: currentPage (state saat ini) dan handlePageChange (fungsi pengubah state)
const Header = ({ currentPage, handlePageChange }) => {
  const navItems = ["About",, "Articles", "Resume", "Portfolio","Certifications", "Contact"];
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Panji824", iconClass: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/panji-wirya-pastika", iconClass: "fab fa-linkedin" },
    { name: "instagram", url: "https://www.instagram.com/pan__wirya/", iconClass: "fab fa-instagram" },
  ];

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
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          > 
            <i className={link.iconClass}> </i>
          </a>
        ))}
      </div>
      

    </header>
  );
};

export default Header;