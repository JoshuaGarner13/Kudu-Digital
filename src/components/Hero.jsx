import React, { useRef } from "react";
import lensVideo from "../assets/Zander Jordaan Demo Reel video.mp4";
import logo from "../assets/mainLogo-NoBG.png";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const handleArrowClick = () => {
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={lensVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <img src={logo} alt="Logo" className="hero-logo" />
      <button
        className="arrow-down"
        onClick={handleArrowClick}
        aria-label="Scroll to About section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
