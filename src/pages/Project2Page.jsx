import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project2Page.css";
import Footer from "../components/Footer";

const Project2Page = () => {
  const youtubeVideoId = "uBeE2s8D9bQ";

  return (
    <div className="project-page-container">
      <div className="project-page-content">
        <div className="project-video-wrapper">
          <iframe
            className="project-video"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
            title="YouTube video player for Marilize en Casparus"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-details">
          <h1 className="project-title">
            Marilize & Casparus Wedding Trailer - Dullstroom
          </h1>
          <p className="project-description">
            Set against the breathtaking, misty landscapes of Dullstroom, this
            wedding trailer for Marilize and Casparus captures the rustic
            elegance and heartfelt emotion of their special day.
          </p>
          <p className="project-description">
            The film balances grand, scenic shots with intimate, personal
            moments, creating a narrative that is both epic and deeply touching.
            The serene atmosphere of the highlands provided a perfect backdrop
            for their love story.
          </p>
          <div className="project-meta">
            <span>
              <strong>Location:</strong> Dullstroom, Mpumalanga
            </span>
            <span>
              <strong>Date:</strong> August 2024
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

export default Project2Page;
