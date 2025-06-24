import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services2Page.css'; // Using a new CSS file for this component
// Import relevant images for this service
import socialImage1 from '../assets/SocialMediaContent.png'; 
import socialImage2 from '../assets/KuduAdvertisements.png';
import socialImage3 from '../assets/KuduAdvert2.png';


const Services2Page = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <div className="service-details-column">
          <h1 className="service-page-title">Social Media Content</h1>
          <p className="service-page-intro">
            In today's digital landscape, engaging video content is key. I create dynamic, short-form videos tailored for platforms like Instagram, TikTok, and Facebook to help you capture your audience's attention and grow your brand.
          </p>
          <div className="service-features">
            <h2 className="features-title">Our Approach Includes</h2>
            <ul>
              <li><strong>Strategy & Concept Development:</strong> We'll work together to define your goals and develop creative concepts that resonate with your target audience.</li>
              <li><strong>Vertical Video Production:</strong> High-quality shooting and editing specifically optimized for mobile, vertical viewing experiences.</li>
              <li><strong>Reels, Shorts & TikToks:</strong> Production of energetic, trend-aware content designed to maximize engagement and reach.</li>
              <li><strong>Quick Turnaround:</strong> A streamlined process to deliver timely content that can capitalize on current trends.</li>
              <li><strong>Batch Content Creation:</strong> Efficiently shoot multiple pieces of content in a single session, providing you with a consistent content pipeline.</li>
            </ul>
          </div>
          {/* <Link to="/#contact" className="service-cta-button">
            Plan Your Content
          </Link> */}
          <Link to="/" className="back-to-main-link">
            &larr; Back to Main Page
          </Link>
        </div>
        <div className="service-image-column">
          <img src={socialImage1} alt="Example of social media content" className="service-page-image" />
          <img src={socialImage2} alt="Short-form video clip" className="service-page-image" />
          <img src={socialImage3} alt="Behind the scenes of a social media shoot" className="service-page-image" />
        </div>
      </div>
    </div>
  );
};

export default Services2Page;
