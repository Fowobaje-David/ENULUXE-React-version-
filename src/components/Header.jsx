import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <strong>Enuluxe</strong>
        <span className="logo-extension">.ng</span>
      </div>
      <nav>
        <a href="#">Buy</a>
          <Link to="/Sell">Sell</Link>
        <a href="#">Rent</a>
          <Link to="/AboutUs">About Us</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/register" className="register-btn">Register</Link>
        <Link to="/login" className="login-btn">Log in</Link>
      </div>
    </header>
  );
};

export default Header;
