import React from 'react';
import { restaurantInfo } from '../data/restaurantData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{restaurantInfo.name}</h3>
          <p>{restaurantInfo.description}</p>
          <div className="social-links">
            <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer">
              📷 Instagram
            </a>
            <a href={restaurantInfo.social.twitter} target="_blank" rel="noopener noreferrer">
              🐦 Twitter
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 {restaurantInfo.phone}</p>
          <p>📍 {restaurantInfo.address}</p>
          <p>✉️ {restaurantInfo.email}</p>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <div className="hours">
            <div className="hour-item">
              <span>Mon-Thu:</span>
              <span>{restaurantInfo.hours.monday}</span>
            </div>
            <div className="hour-item">
              <span>Fri:</span>
              <span>{restaurantInfo.hours.friday}</span>
            </div>
            <div className="hour-item">
              <span>Sat:</span>
              <span>{restaurantInfo.hours.saturday}</span>
            </div>
            <div className="hour-item">
              <span>Sun:</span>
              <span>{restaurantInfo.hours.sunday}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 {restaurantInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
