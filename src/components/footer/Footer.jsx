import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#Contact">Contact</a></li>
        </ul>

        <p className="footer-copy">
          © {currentYear} Psk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
