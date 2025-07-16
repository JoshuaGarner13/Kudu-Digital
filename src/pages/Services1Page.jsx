import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services1Page.css";
import weddingImage1 from "../assets/WeddingFilms.png";
import weddingImage2 from "../assets/wedding-photo2.jpg";
import weddingImage3 from "../assets/wedding-photo1.jpg";

const Services1Page = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <div className="service-details-column">
          <h1 className="service-page-title">Wedding Videography & Editing</h1>
          <p className="service-page-intro">
            Your wedding day is a once-in-a-lifetime event. My goal is to capture the authentic
            emotion and beauty of your day through a cinematic film. I also offer editing-only services if you already have your footage.
          </p>
          <div className="service-features">
            <h2 className="features-title">Our Services</h2>
            <ul>
              <li><strong>Full-Day Coverage:</strong> From the morning preparations to the final send-off, I'm there to capture every key moment.</li>
              <li><strong>Cinematic Highlight Film:</strong> A beautifully edited 5-7 minute film telling the story of your day, set to licensed music.</li>
              <li><strong>Cinematic Wedding Trailer:</strong> A high-impact, 60-90 second trailer perfect for sharing on social media.</li>
              <li><strong>Full Wedding Film Editing:</strong> We edit your footage into a complete film, including the full ceremony and speeches. <em className="footnote">Please note: For this service, all footage must be provided by you.</em></li>
              <li><strong>High-Quality Audio:</strong> Professional audio recording for crystal-clear vows, speeches, and ambient sounds.</li>
              <li><strong>Digital Delivery:</strong> Your films are delivered in high-definition via a private online gallery.</li>
            </ul>
          </div>

          <div className="pricing-section">
            <h2 className="features-title">Videography Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Legacy Package</h3>
                <div className="price">R9 000</div>
                <ul>
                  <li>Wedding Highlight (3-5 mins)</li>
                  <li>Wedding Trailer (10-40 secs)</li>
                  <li>Full Day Shoot (8 hours)</li>
                </ul>
                <p className="exclusions">Excludes transport and camera hire.</p>
              </div>
              <div className="pricing-card featured">
                <div className="featured-badge">Most Popular</div>
                <h3>Cinematic Story Package</h3>
                <div className="price">R10 500</div>
                <ul>
                  <li>Wedding Highlight (5-7 mins)</li>
                  <li>Wedding Trailer (10-40 secs)</li>
                  <li>Full Day Shoot (12 hours)</li>
                </ul>
                <p className="exclusions">Excludes transport and camera hire.</p>
              </div>
            </div>

            <h2 className="features-title" style={{ marginTop: '3rem' }}>Editing-Only Services</h2>
            <p className="service-page-intro" style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '2rem' }}>Already have your video clips and audio? I can craft them into a beautiful film for you.</p>
            <div className="pricing-grid-small">
              <div className="pricing-card-small">
                <h4>Full Wedding Day Edit</h4>
                <p>A 15-30 minute film including speeches, ceremony, highlights, and dances.</p>
                <div className="price-small">R7 000</div>
              </div>
              <div className="pricing-card-small">
                <h4>Wedding Highlight Edit</h4>
                <p>A 3-5 minute cinematic highlight of your provided footage.</p>
                <div className="price-small">R5 000</div>
              </div>
              <div className="pricing-card-small">
                <h4>Wedding Trailer Edit</h4>
                <p>A 10-40 second, high-impact trailer ready for social media.</p>
                <div className="price-small">R1 500</div>
              </div>
            </div>
          </div>

          <div className="examples-section">
            <h2 className="features-title">Wedding Trailers & Full Highlights</h2>
            <div className="examples-grid">
              <div className="example-item">
                <div className="service-video-container"><iframe className="service-page-video" src="https://www.youtube.com/embed/emcJw8mTniA" title="Wedding Trailer Example 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <h3 className="example-item-title">Clayton & Kurston TRAILER</h3>
              </div>
              <div className="example-item">
                <div className="service-video-container"><iframe className="service-page-video" src="https://www.youtube.com/embed/88vfOl4Je0E" title="Wedding Trailer Example 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <h3 className="example-item-title">Clayton & Kurston Highlights</h3>
              </div>
              <div className="example-item">
                <div className="service-video-container"><iframe className="service-page-video" src="https://www.youtube.com/embed/uBeE2s8D9bQ" title="Wedding Trailer Example 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <h3 className="example-item-title">Marilize & Casparus TRAILER</h3>
              </div>
              <div className="example-item">
                <div className="service-video-container"><iframe className="service-page-video" src="https://www.youtube.com/embed/lhgmzZTAedE" title="Wedding Trailer Example 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <h3 className="example-item-title">Stefan & Ester Highlights</h3>
              </div>
              <div className="example-item">
                <div className="service-video-container"><iframe className="service-page-video" src="https://www.youtube.com/embed/IwWIvdqh8l8" title="Wedding Trailer Example 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <h3 className="example-item-title">Marthinus & Nanette Highlights</h3>
              </div>
            </div>
          </div>

          <Link to="/" className="back-to-main-link">
            ← Back to Main Page
          </Link>
        </div>
        <div className="service-image-column">
          <img src={weddingImage1} alt="Couple at their wedding ceremony" className="service-page-image"/>
          <img src={weddingImage2} alt="Wedding reception details" className="service-page-image"/>
          <img src={weddingImage3} alt="Bride and groom portrait" className="service-page-image"/>
        </div>
      </div>
    </div>
  );
};

export default Services1Page;