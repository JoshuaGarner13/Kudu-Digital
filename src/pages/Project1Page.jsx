import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project1Page.css'; // Import the CSS for this page
import Footer from '../components/Footer';
// We no longer need to import a local video file.

const Project1Page = () => {
  // IMPORTANT: Replace this placeholder with your actual YouTube video ID.
  const youtubeVideoId = "88vfOl4Je0E"; 

  return (
    <div className="project-page-container">
      <div className="project-page-content">
        <div className="project-video-wrapper">
          {/* The <video> tag has been replaced with this <iframe> */}
          <iframe
            className="project-video"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
            title="YouTube video player for Clayton & Kurston"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-details">
          <h1 className="project-title">Clayton & Kurston | A Covenant Before Christ</h1>
          <p className="project-description">
            This film captures the beautiful and emotional wedding day of Clayton and Kurston. Our focus was to weave a narrative that highlighted their deep connection and the solemn covenant they made before Christ.
          </p>
          <p className="project-description">
            Through cinematic visuals and careful attention to the day's most meaningful moments, we created a timeless keepsake that they can cherish forever. Every shot was framed with purpose, and every edit was made to enhance the emotional core of their story.
          </p>
          <div className="project-meta">
            <span><strong>Location:</strong> Pretoria, SA</span>
            <span><strong>Date:</strong> June 2024</span>
          </div>
          <Link to="/" className="back-to-projects-link">
            &larr; Back to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project1Page;
