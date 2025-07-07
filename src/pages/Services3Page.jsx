import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Services3Page.css";
import socialImage1 from "../assets/SocialMediaContent.png";
import socialImage2 from "../assets/orchestra.png";
import socialImage3 from "../assets/KuduAdvert2.png";
import pamphletImage from "../assets/GSO Poster 2.png";

const Services3Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  return (
    <>
      <div className="service-page-container">
        <div className="service-page-content">
          <div className="service-details-column">
            <h1 className="service-page-title">
              Advertisements & Promotional Videos
            </h1>
            <p className="service-page-intro">
              From compelling brand stories to high-impact product showcases, I
              produce professional advertisements designed to elevate your brand
              and drive results. Let's create something unforgettable.
            </p>
            <div className="service-features">
              <h2 className="features-title">Our Capabilities</h2>
              <ul>
                <li><strong>Brand Commercials:</strong> Cinematic advertisements for TV, web, and social media that build brand identity and connect with viewers.</li>
                <li><strong>Product Videos:</strong> Dynamic, visually appealing videos that highlight the features and benefits of your products.</li>
                <li><strong>Corporate & Brand Story Videos:</strong> Tell the story behind your company, showcasing your values, mission, and team to build trust and credibility.</li>
                <li><strong>4K Production:</strong> All projects are shot and delivered in ultra-high resolution for a premium, future-proof finish.</li>
                <li><strong>Concept to Delivery:</strong> Full-service production including scriptwriting, storyboarding, casting, shooting, editing, and color grading.</li>
              </ul>
            </div>
            <div className="examples-section">
              <h2 className="features-title">Examples of Our Work</h2>
              <div className="examples-grid">
                <div className="example-item">
                  <div className="service-video-container">
                    <iframe className="service-page-video" src="https://www.youtube.com/embed/ZqcPQtDt0_o" title="YouTube video player 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h3 className="example-item-title">Promotional Video</h3>
                </div>
                <div className="example-item">
                  <div className="service-video-container">
                    <iframe className="service-page-video" src="https://www.youtube.com/embed/rvAEo-Bgds4" title="YouTube video player 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h3 className="example-item-title">Promotional Video</h3>
                </div>
                <div className="example-item clickable" onClick={toggleModal}>
                  <div className="service-video-container pamphlet-container">
                    <img src={pamphletImage} alt="Promotional pamphlet" className="example-pamphlet-image"/>
                    <div className="view-icon-overlay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        <path d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="example-item-title">Promotional Pamphlet</h3>
                </div>
              </div>
            </div>

            <Link to="/" className="back-to-main-link">
              ← Back to Main Page
            </Link>
          </div>
          <div className="service-image-column">
            <img src={socialImage1} alt="Example of social media content" className="service-page-image"/>
            <img src={socialImage2} alt="Short-form video clip" className="service-page-image"/>
            <img src={socialImage3} alt="Behind the scenes of a social media shoot" className="service-page-image"/>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={toggleModal}>&times;</button>
            <img src={pamphletImage} alt="Enlarged promotional pamphlet" className="modal-image"/>
          </div>
        </div>
      )}
    </>
  );
};

export default Services3Page;