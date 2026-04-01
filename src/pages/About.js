import React from 'react';
import { restaurantInfo } from '../data/restaurantData';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About {restaurantInfo.name}</h1>
        <p>Our story, our passion, our commitment to authentic Italian cuisine</p>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2025, {restaurantInfo.name} began as a small micro project with a big dream:
                to bring authentic Italian cuisine to our clg;. What started as a passion project
                has grown into a beloved dining destination.
              </p>
              <p>
                Our founders , Jaineel , Aditya , Viraj , brought his grandmother's traditional recipes from Mumbai,
                Maharashtra, and combined them with locally sourced ingredients to create dishes that honor
                both tradition and innovation.
              </p>
              <p>
                Today, we continue to serve the same quality food that made us famous, while constantly
                evolving our menu to include seasonal specialties and customer favorites.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder-image chef">
                <p>👨‍🍳 Master Chef Viraj </p>
                <p>👨‍🍳 Master Chef jaineel</p> 
                👨‍🍳 Master Chef Aditya 
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>We source the finest local and imported ingredients to ensure every dish is made with quality and care.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Tradition</h3>
              <p>Our recipes are passed down through generations, maintaining the authentic flavors of traditional Italian cooking.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Culinary Excellence</h3>
              <p>Our chefs combine traditional techniques with modern innovation to create memorable dining experiences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We're proud to be part of our community, supporting local suppliers and creating lasting relationships.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-avatar">👨‍🍳</div>
              </div>
              <h4>Jaineel</h4>
              <p className="member-role">Executive Chef & Owner</p>
              <p className="member-bio">With over 25 years of culinary experience, Marco brings authentic Italian flavors to every dish.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-avatar">👩‍🍳</div>
              </div>
              <h4>Aditya</h4>
              <p className="member-role">Pastry Chef</p>
              <p className="member-bio">Sofia creates our signature desserts using traditional Italian techniques and modern creativity.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-avatar">🍷</div>
              </div>
              <h4>Viraj</h4>
              <p className="member-role">Sommelier</p>
              <p className="member-bio">Giuseppe curates our wine selection, pairing the perfect wines with our Italian dishes.</p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <h2>Visit Us</h2>
          <div className="location-content">
            <div className="location-info">
              <h3>Address</h3>
              <p>{restaurantInfo.address}</p>

              <h3>Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Thursday:</span>
                  <span>{restaurantInfo.hours.monday}</span>
                </div>
                <div className="hour-item">
                  <span>Friday:</span>
                  <span>{restaurantInfo.hours.friday}</span>
                </div>
                <div className="hour-item">
                  <span>Saturday:</span>
                  <span>{restaurantInfo.hours.saturday}</span>
                </div>
                <div className="hour-item">
                  <span>Sunday:</span>
                  <span>{restaurantInfo.hours.sunday}</span>
                </div>
              </div>

              <h3>Contact</h3>
              <p>📞 {restaurantInfo.phone}</p>
              <p>✉️ {restaurantInfo.email}</p>
            </div>
            <div className="location-map">
              <div className="placeholder-map">
                🗺️ Interactive Map Coming Soon
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
