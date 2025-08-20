import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios.jsx';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    email: '',
    phonenumber: '',
    password: '',
    terms: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit fired'); // to help and  check if form submits

    if (!form.terms) {
      alert('Please accept the terms and conditions.');
      return;
    }

    console.log('Form data being sent:', form);

    try {
      await
          axios.post(
              'https://realestateapis.onrender.com/user/signup',
              form
          );

      console.log('Response from backend:');
      setSuccess('Registration successful! You can now log in.');
      setError('');


      setForm({
        firstName: '',
        surname: '',
        email: '',
        phonenumber: '',
        password: '',
        terms: false
      });

      // it will now redirect after 1.5 secs
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error('Error during registration:', err);

      if (err.response) {
        console.log('Backend response:', err.response.data);
        setError(err.response.data.message || 'Registration failed');
      } else {
        setError('Registration failed.');
      }

      setSuccess('');
    }
  };

  return (
      <div>
        {/* HEADER */}
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

        {/* Registration form */}
        <div className="register-page" style={{ padding: "30px" }}>
          <div className="register-card" style={{ maxWidth: "600px", margin: "auto", marginTop: "100px" }}>
            <h1>Create account</h1>
            <h5>Find yourself the perfect property. Register with us today!</h5>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleSubmit}>
              <div className="row" style={{ display: "flex", gap: "15px" }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="firstName" className="required">First Name</label>
                  <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
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
                      value={form.surname}
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
                  value={form.email}
                  onChange={handleInputChange}
                  required
              />

              <label htmlFor="phone" className="required">Phone Number</label>
              <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
              />

              <label htmlFor="password" className="required">Password</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  required
              />

              <div className="checkbox-container" style={{ display: "flex", alignItems: "center", margin: "15px 0" }}>
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={form.terms}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: "10px" }}
                />
                <label htmlFor="terms" style={{ fontSize: "14px", color: "#333" }}>
                  By clicking register, you agree to our
                  <a href="#"> Terms of Service </a> and <a href="#"> Privacy Policy</a>.
                </label>
              </div>

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
