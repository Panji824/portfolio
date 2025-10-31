import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>© {currentYear} Your Name</p>
    </footer>
  );
};

export default Footer;
