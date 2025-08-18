import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/"><h3>Enuluxe.ng</h3></Link>
          <p>Enuluxe.ng is now available on iOS, Android and Chrome. Use our website to explore the world.</p>   
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">What's New</a></li>
            <li><a href="#">New Locations</a></li>
            <li><a href="#">New Home</a></li>
            <li><a href="#">Sold</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com" alt="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" alt="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" alt="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" alt="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Enuluxe.ng. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
