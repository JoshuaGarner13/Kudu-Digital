import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logoImage from "../assets/horns.png";
import {
  FaDiscord,
  FaForumbee,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaBriefcase,
  FaSun,
  FaMoon,
} from "react-icons/fa"; // Import sun and moon icons
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Add state for the theme
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Apply the new theme to the body element
    document.body.className = newTheme === "dark" ? "dark-mode" : "";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu on section scroll
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <nav
    className={`navbar ${isScrolled ? "scrolled" : ""} ${
      isMobileMenuOpen ? "expanded" : ""
    }`}
  >
    {/* The logo remains a direct child */}
    <img
      src={logoImage}
      alt="Logo"
      className={`logo ${isScrolled ? "scrolled-logo" : ""}`}
    />

    {/* The DESKTOP links (contains the theme toggle for desktop view) */}
    <ul className="nav-links">
      <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a></li>
      <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a></li>
      <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
      <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
      <li>
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className="toggle-slider">
            <FaSun className="theme-icon sun" />
            <FaMoon className="theme-icon moon" />
          </div>
        </div>
      </li>
    </ul>

    {/* =================== NEW MOBILE CONTROLS GROUP =================== */}
    {/* This group holds the toggle and icon for mobile view only */}
    <div className="mobile-controls">
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className="toggle-slider">
          <FaSun className="theme-icon sun" />
          <FaMoon className="theme-icon moon" />
        </div>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="hamburger-line line-1"></div>
        <div className="hamburger-line line-2"></div>
        <div className="hamburger-line line-3"></div>
      </div>
    </div>
    {/* ================================================================= */}


    {/* The EXPANDABLE MOBILE links (no longer contains the toggle) */}
    <div className="mobile-nav-links">
        <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
            <li className="mobile-social-links">
                <a href="#youtube" aria-label="Youtube"><FaYoutube /></a>
                <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
            </li>
        </ul>
    </div>
  </nav>
);


};

export default Navbar;
