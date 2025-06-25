import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project3Page.css";

const Project3Page = () => {
  const youtubeVideoId = "emcJw8mTniA";

  return (
    <div className="project-page-container">
      <div className="project-page-content">
        <div className="project-video-wrapper">
          <iframe
            className="project-video"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
            title="YouTube video player for Kurston & Clayton Wedding Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-details">
          <h1 className="project-title">Kurston & Clayton - Wedding Trailer</h1>
          <p className="project-description">
            A concise and energetic trailer showcasing the highlights of Kurston
            and Clayton's wedding. This piece is designed for social media,
            capturing the essence and excitement of the day in a shareable
            format.
          </p>
          <p className="project-description">
            Fast-paced edits, dynamic music, and the most joyful moments come
            together to create a trailer that's as vibrant and full of life as
            the couple themselves.
          </p>
          <div className="project-meta">
            <span>
              <strong>Location:</strong> Pretoria, SA
            </span>
            <span>
              <strong>Date:</strong> June 2025
            </span>
          </div>
          <Link to="/" className="back-to-projects-link">
            &larr; Back to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project3Page;
