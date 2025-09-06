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

        {/* Google Map + Address */}
        <div className="footer-col map-col">
          <h4>Address</h4>
          <p>96 East Central Park Road,<br />New York, USA</p>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.982680248776!2d-73.97124868459354!3d40.78306097932462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589d1a55d0f1%3A0x21f0f0c7d0a8b2b4!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1660000000000!5m2!1sen!2sus"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
