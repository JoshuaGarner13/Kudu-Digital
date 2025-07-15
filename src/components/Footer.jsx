import React from "react";
import "../styles/Footer.css";
import logoImage from "../assets/horns.png";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-area">
            <img src={logoImage} alt="Logo" className="footer-logo" />
            <span className="footer-brand-name">Kudu Digital</span>
          </div>
          <div className="footer-social-media">
            <a
              href="http://www.youtube.com/@KuduDigital2024"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/zander-jordaan-17b0452aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kudu_digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Kudu Digital. All Rights Reserved.</p>
          <p>Created by{" "}
            <a
              href="https://joshuagarner.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Joshua Garner
            </a></p>
          <p>Pretoria, Gauteng, South Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
