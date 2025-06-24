import React from 'react';
import SpotlightCard from './SpotlightCard';
import '../styles/Services.css';
import image1 from '../assets/WeddingFilms.png';
import image2 from '../assets/SocialMediaContent.png';
import image3 from '../assets/KuduAdvertisements.png';

const servicesData = [
  {
    image: image1,
    title: "Wedding Videos",
    subtitle: "Cinematic, heartfelt films that capture the authentic emotion and unique story of your special day.",
    handle: "Learn More",
    spotlightColor: "rgba(59, 130, 246, 0.4)",
    url: "/services-wedding-videos"
  },
  {
    image: image2,
    title: "Social Media Content",
    subtitle: "Engaging, short-form video content optimized for platforms like Instagram, TikTok, and Facebook.",
    handle: "Learn More",
    spotlightColor: "rgba(16, 185, 129, 0.4)",
    url: "/services-corporate-videos"
  },
  {
    image: image3,
    title: "Advertisements",
    subtitle: "Professional, high-impact commercials and promotional videos designed to elevate your brand or business.",
    handle: "Learn More",
    spotlightColor: "rgba(245, 158, 11, 0.4)",
    url: "/services-event-videos"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h1 className="page-title">Services</h1>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <SpotlightCard key={index} spotlightColor={service.spotlightColor} className="service-card">
            <div className="service-content">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-info">
                <h2 className="service-title-text">{service.title}</h2>
                <p className="service-subtitle">{service.subtitle}</p>
                <a href={service.url} className="service-handle">{service.handle}</a>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Services;