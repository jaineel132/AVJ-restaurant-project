import React, { useState } from 'react';
import { restaurantInfo } from '../data/restaurantData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Reservation request:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch or make a reservation for an unforgettable dining experience</p>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Visit Us</h2>
            <div className="info-section">
              <h3>📍 Address</h3>
              <p>{restaurantInfo.address}</p>
            </div>

            <div className="info-section">
              <h3>📞 Phone</h3>
              <p>{restaurantInfo.phone}</p>
            </div>

            <div className="info-section">
              <h3>✉️ Email</h3>
              <p>{restaurantInfo.email}</p>
            </div>

            <div className="info-section">
              <h3>🕒 Hours</h3>
              <div className="hours-list">
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

            <div className="info-section">
              <h3>📱 Follow Us</h3>
              <div className="social-links">
                <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={restaurantInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="reservation-form">
            <h2>Make a Reservation</h2>

            {isSubmitted ? (
              <div className="success-message">
                <h3>🎉 Reservation Request Submitted!</h3>
                <p>Thank you for your reservation request. We'll contact you within 24 hours to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any special dietary requirements, celebrations, or special requests..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
