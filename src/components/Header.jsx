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
        <a href="#">Sell</a>
        <a href="#">Rent</a>
        <a href="#">About us</a>
      </nav>
      <div className="auth-buttons">
        <Link to="/register" className="register-btn">Register</Link>
        <Link to="/login" className="login-btn">Log in</Link>
      </div>
    </header>
  );
};

export default Header;
