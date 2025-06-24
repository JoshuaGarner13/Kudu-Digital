import React from 'react';
import '../styles/Contact.css'; // Your CSS file path
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear from you.
          </p>
        </header>
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-text">
              Fill up the form and I will get back to you within 24 hours. Or if you prefer, you can reach out directly through the details below.
            </p>
            <ul className="info-list">
              <li>
                <span className="info-icon"><FaPhone /></span>
                <span>+27 61 412 8644</span>
              </li>
              <li>
                <span className="info-icon"><FaEnvelope /></span>
                <span>zanderjordaan2004@gmail.com</span>
              </li>
              <li>
                <span className="info-icon"><FaMapMarkerAlt /></span>
                <span>Pretoria, Gauteng, South Africa</span>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;