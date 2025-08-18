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

    // sends the data to backend
    console.log('Registration data:', formData);
    alert('Registration successful! Welcome to Enuluxe.ng');
    
    // Reset form
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
    <div className="register-page">
      <div className="register-card">
        <h1>Create account</h1>
        <h5>Find yourself the perfect property. Register with us today!</h5>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
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
            <div>
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

          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required 
            />


            <label htmlFor="terms">
              By clicking register, you agree to our
              <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div>

          <div className="or-text">OR</div>

          <button type="submit">Register</button>

          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
