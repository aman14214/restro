import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { FaMapMarkerAlt, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import heroBg from "../assets/images/restro.jpg";
import logo from "../assets/images/logo.png";

function Hero() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // keyboard toggle helper
  const handleMenuKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setMenuOpen((s) => !s);
    }
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">

        {/* ===== Header ===== */}
        <header className="header transparent-header">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="logo-text">Restro</span>
          </div>

          {/* hamburger button */}
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
            onKeyDown={handleMenuKey}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Menu */}
          <div className={`nav-right ${menuOpen ? "open" : ""}`}>

            <nav className="nav-links" role="navigation" aria-label="Main">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>

            <button
              className="signin-btn"
              onClick={() => {
                navigate("/auth");
                setMenuOpen(false);
              }}
            >
              Sign In
            </button>
          </div>
        </header>

        {/* ===== Hero Main Content ===== */}
        <div className="hero-content">
          <h1>
            Order food & groceries. Discover best restaurants.{" "}
            <span>Restro it!</span>
          </h1>

          <div className="search-box">
            <div className="input-group">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Enter your delivery location" />
              <span className="dropdown">▼</span>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Search for restaurant, item or more" />
              <FaSearch className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
