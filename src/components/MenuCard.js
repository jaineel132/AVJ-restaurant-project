import React from 'react';
import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
        {item.featured && <div className="featured-badge">Featured</div>}
      </div>

      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">₹{item.price.toFixed(2)}</span>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
