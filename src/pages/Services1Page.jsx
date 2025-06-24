import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services1Page.css'; // Import the CSS for this page
// Import multiple images for the new column layout
import weddingImage1 from '../assets/WeddingFilms.png'; 
import weddingImage2 from '../assets/WeddingTrailers.png';
import weddingImage3 from '../assets/KurstonClaytonWeddingTrailer.png';


const Services1Page = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <div className="service-details-column">
          <h1 className="service-page-title">Wedding Videography Services</h1>
          <p className="service-page-intro">
            Your wedding day is a once-in-a-lifetime event, filled with moments you'll want to cherish forever. My goal is to capture the authentic emotion, beauty, and unique story of your day through a cinematic, heartfelt film.
          </p>
          <div className="service-features">
            <h2 className="features-title">What's Included</h2>
            <ul>
              <li><strong>Full-Day Coverage:</strong> From the morning preparations to the final send-off, I'm there to capture every key moment.</li>
              <li><strong>Cinematic Highlight Film:</strong> A beautifully edited 5-7 minute film telling the story of your day, set to licensed music.</li>
              <li><strong>Full Ceremony & Speeches Edit:</strong> A complete, multi-camera recording of your entire ceremony and all the reception speeches.</li>
              <li><strong>High-Quality Audio:</strong> Professional audio recording for crystal-clear vows, speeches, and ambient sounds.</li>
              <li><strong>Digital Delivery:</strong> Your films are delivered in high-definition via a private online gallery, ready to be shared and downloaded.</li>
            </ul>
          </div>
          {/* <Link to="/#contact" className="service-cta-button">
            Inquire About Your Date
          </Link> */}
          <Link to="/" className="back-to-main-link">
            &larr; Back to Main Page
          </Link>
        </div>
        {/* The single image column is replaced with this new structure */}
        <div className="service-image-column">
          <img src={weddingImage1} alt="Couple at their wedding ceremony" className="service-page-image" />
          <img src={weddingImage2} alt="Wedding reception details" className="service-page-image" />
          <img src={weddingImage3} alt="Bride and groom portrait" className="service-page-image" />
        </div>
      </div>
    </div>
  );
};

export default Services1Page;
