import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantInfo, featuredItems } from '../data/restaurantData';
import MenuCard from '../components/MenuCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to {restaurantInfo.name}</h1>
          <p className="hero-subtitle">{restaurantInfo.tagline}</p>
          <p className="hero-description">{restaurantInfo.description}</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/contact" className="btn btn-secondary">Make a Reservation</Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Dishes</h2>
          <p className="section-subtitle">Discover our chef's special recommendations</p>

          <div className="featured-grid">
            {featuredItems.slice(0, 3).map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                For over 20 years, {restaurantInfo.name} has been serving authentic Italian cuisine
                made with the finest ingredients and traditional recipes passed down through generations.
                Our commitment to quality and passion for Italian culinary traditions creates an
                unforgettable dining experience.
              </p>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                🍝 Authentic Italian Kitchen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="quick-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>{restaurantInfo.address}</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Hours</h3>
              <p>Open Daily<br />4:00 PM - 11:00 PM</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>{restaurantInfo.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
