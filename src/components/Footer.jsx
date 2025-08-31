import React from "react";
import "./Footer.css";
import logo from "../assets/images/logo.png"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Restro Logo" />
          <p>© 2025 Restro Limited</p>
        </div>

        {/* Company Section */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Restro One</li>
            <li>Instamart</li>
            <li>Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Available Cities */}
        <div className="footer-col">
          <h4>Available in:</h4>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="city-dropdown">
            <option>685 cities</option>
          </select>
        </div>

        {/* Life at Restro */}
        <div className="footer-col">
          <h4>Life at Restro</h4>
          <ul>
            <li>Explore With Us</li>
            <li>Restro News</li>
            <li>Snackables</li>
          </ul>

          <h4>Social Links</h4>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
