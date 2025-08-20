import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert('Please accept the terms and conditions.');
      return;
    }

    console.log('Registration data:', formData);
    alert('Registration successful! Welcome to Enuluxe.ng');

    setFormData({
      firstName: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      terms: false
    });
  };

  return (
      <div>
        {/* ✅ EXACT HEADER YOU SENT */}
        <header
            style={{
              background: "rgba(0,77,102,0)",
              padding: "15px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
        >
          <h1 style={{ margin: 0, fontSize: "22px" }}>Enuluxe.ng</h1>
          <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/sell" style={linkStyle}>Sell</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
          </nav>
        </header>

        {/* ✅ Registration form */}
        <div className="register-page" style={{ padding: "30px" }}>
          <div className="register-card" style={{ maxWidth: "600px", margin: "auto" , marginTop: "100px"}}>
            <h1>Create account</h1>
            <h5>Find yourself the perfect property. Register with us today!</h5>

            <form onSubmit={handleSubmit}>
              <div className="row" style={{ display: "flex", gap: "15px" }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="firstName" className="required">First Name</label>
                  <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="surname" className="required">Surname</label>
                  <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                  />
                </div>
              </div>

              <label htmlFor="email" className="required">Email address</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
              />

              <label htmlFor="phone" className="required">Phone Number</label>
              <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
              />

              <label htmlFor="password" className="required">Password</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
              />

              {/* ✅ Fixed checkbox alignment */}
              <div
                  className="checkbox-container"
                  style={{ display: "flex", alignItems: "center", margin: "15px 0" }}
              >
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: "10px" }}
                />
                <label htmlFor="terms" style={{ fontSize: "14px", color: "#333" }}>
                  By clicking register, you agree to our
                  <a href="#"> Terms of Service </a> and <a href="#"> Privacy Policy</a>.
                </label>
              </div>

              <div className="or-text" style={{ textAlign: "center", margin: "10px 0" }}>OR</div>

              <button type="submit">Register</button>

              <p style={{ marginTop: "10px" }}>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
};

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontSize: "16px",
};

export default Register;
