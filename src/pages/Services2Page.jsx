import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services2Page.css";
import socialImage1 from "../assets/SocialMediaContent.png";
import socialImage2 from "../assets/socialmedia2.png";
import socialImage3 from "../assets/KuduAdvert2.png";
import video1 from "../assets/BosDeave1.mp4";
import video2 from "../assets/BosDeave2.mp4";
import video3 from "../assets/BosDeave3.mp4";
import video4 from "../assets/BosDeave4.mp4";

const socialVideos = [
  { src: video1, title: "Instagram Reel" },
  { src: video2, title: "TikTok Trend" },
  { src: video3, title: "Product Showcase" },
  { src: video4, title: "Behind the Scenes" },
];

const Services2Page = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <div className="service-details-column">
          <h1 className="service-page-title">Social Media Content</h1>
          <p className="service-page-intro">
            In today's digital landscape, engaging video content is key. I
            create dynamic, short-form videos tailored for platforms like
            Instagram, TikTok, and Facebook to help you capture your audience's
            attention and grow your brand.
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

          <div className="pricing-section">
            <h2 className="features-title">Pricing</h2>
            <div className="pricing-grid-small">
              <div className="pricing-card-small">
                <h4>Graphic Design Post</h4>
                <p>A custom-designed graphic for your social media feed.</p>
                <div className="price-small">R250</div>
              </div>
              <div className="pricing-card-small">
                <h4>Instagram Reel</h4>
                <p>An engaging short-form video. Price varies based on complexity.</p>
                <div className="price-small">From R350</div>
              </div>
              <div className="pricing-card-small">
                <h4>Picture</h4>
                <p>A single, professionally edited photograph for your use.</p>
                <div className="price-small">R150</div>
              </div>
              <div className="pricing-card-small">
                <h4>Basic Post</h4>
                <p>A standard text and image post for your social channels.</p>
                <div className="price-small">R50</div>
              </div>
            </div>
          </div>

          <div className="examples-section">
            <h2 className="features-title">Examples of Our Work</h2>
            <div className="examples-grid video-grid">
              {socialVideos.map((video, index) => (
                <div key={index} className="example-item">
                  <div className="video-thumbnail-container">
                    <video
                      src={video.src}
                      className="video-thumbnail"
                      controls
                      preload="metadata"
                    />
                  </div>
                  {/* <h3 className="example-item-title">{video.title}</h3> */}
                </div>
              ))}
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
  );
};

export default Services2Page;