import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services3Page.css'; // Using a new CSS file for this component
// Import relevant images for this service
import socialImage1 from '../assets/SocialMediaContent.png'; 
import socialImage2 from '../assets/KuduAdvertisements.png';
import socialImage3 from '../assets/KuduAdvert2.png';


const Services3Page = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <div className="service-details-column">
          <h1 className="service-page-title">Advertisements & Promotional Videos</h1>
          <p className="service-page-intro">
            From compelling brand stories to high-impact product showcases, I produce professional advertisements designed to elevate your brand and drive results. Let's create something unforgettable.
          </p>
          <div className="service-features">
            <h2 className="features-title">Our Capabilities</h2>
            <ul>
              <li><strong>Brand Commercials:</strong> Cinematic advertisements for TV, web, and social media that build brand identity and connect with viewers.</li>
              <li><strong>Product Videos:</strong> Dynamic, visually appealing videos that highlight the features and benefits of your products.</li>
              <li><strong>Corporate & Brand Story Videos:</strong> Tell the story behind your company, showcasing your values, mission, and team to build trust and credibility.</li>
              <li><strong>4K & 6K Production:</strong> All projects are shot and delivered in ultra-high resolution for a premium, future-proof finish.</li>
              <li><strong>Concept to Delivery:</strong> Full-service production including scriptwriting, storyboarding, casting, shooting, editing, and color grading.</li>
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

export default Services3Page;
