import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logoImage from "../assets/horns.png";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isMobileMenuOpen ? "expanded" : ""
      }`}
    >
      <img
        src={logoImage}
        alt="Logo"
        className={`logo ${isScrolled ? "scrolled-logo" : ""}`}
      />

      {/* DESKTOP links */}
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-slider">
              <FaSun className="theme-icon sun" />
              <FaMoon className="theme-icon moon" />
            </div>
          </div>
        </li>
      </ul>

      {/* MOBILE CONTROLS GROUP */}
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

      {/* EXPANDABLE MOBILE links */}
      <div className="mobile-nav-links">
        <ul>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
          <li className="mobile-social-links">
            <a href="#youtube" aria-label="Youtube">
              <FaYoutube />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
