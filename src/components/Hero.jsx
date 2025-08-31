import React from "react";
import "./Hero.css";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"; 
import heroBg from "../assets/images/restro.jpg";
import logo from "../assets/images/logo.png"; // ✅ correct logo path

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">

        {/* 🔹 Header inside Hero with transparent bg */}
        <header className="header transparent-header">
          <div className="logo-container">
            <img 
              src={logo} 
              alt="logo" 
              className="logo-img" 
            />
            <span className="logo-text">Restro</span>
          </div>
          <button className="signin-btn">Sign In</button>
        </header>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Order food & groceries. Discover best restaurants.{" "}
            <span>Restro it!</span>
          </h1>

          <div className="search-box">
            {/* Location Input */}
            <div className="input-group">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Enter your delivery location" />
              <span className="dropdown">▼</span>
            </div>

            {/* Search Input */}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search for restaurant, item or more" 
              />
              <FaSearch className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
