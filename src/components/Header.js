import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>AJV Restaurent</h1>
            <span className="tagline">Authentic Italian Cuisine</span>
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-info">
          <div className="contact-info">
            <span>📞 1234567890</span>
            <span>📍 St francis institute</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
