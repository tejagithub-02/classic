import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        
   
        <div className="footer-section brand brand-flex">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <h3 className="footer-brand-name">The Classic Kitchen</h3>
        </div>

      
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>    
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <address>
         
            📍 No 180/2B, Ground Floor, 6th Cross, Lakshmi Layout, Garvebhavi Palya, Bangalore - 560068.
          </address>
          <a href="mailto:info@tckitchen.com" className="footer-contact-link">
            <FaEnvelope />info@tckitchen.com
          </a>
          <a href="tel:+91 90358 15260" className="footer-contact-link">
            <FaPhoneAlt /> +91 90358 15260
          </a>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Designed by <strong>Bloom IT Solutions</strong></p>
        <div className="footer-socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
