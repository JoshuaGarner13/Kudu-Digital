import React, { forwardRef } from "react";
import ProfileCard from "./ProfileCard";
import "../styles/About.css";
import profileImage from "../assets/profile.jpg";

const About = forwardRef((props, ref) => {
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-card">
          <ProfileCard
            name="Zander Jordaan"
            title="Professional Video Editor"
            handle="KuduDigital"
            status="Online"
            contactText="Contact Me"
            avatarUrl={profileImage}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
        <div className="about-text">
          <p>
            I'm a filmmaker and editor based in Pretoria, focused on creating
            high-quality video content with a strong sense of story and visual
            style. I work across a range of projects — from weddings and branded
            content to personal films — always aiming to deliver work that’s
            polished, purposeful, and emotionally engaging. While I'm
            comfortable in many formats, I’ve developed a particular niche in
            wedding films, where I combine cinematic visuals with a thoughtful
            approach to capturing the day’s most meaningful moments.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
