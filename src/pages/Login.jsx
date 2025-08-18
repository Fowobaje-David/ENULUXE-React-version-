import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Login data:', formData);
    alert('Login successful! Welcome back to Enuluxe.ng');
    
    // Reset form
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-container">
          <h2>Welcome back</h2>
          
          <a href="#" className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
            Continue with Google
          </a>
          
          <div className="divider">or</div>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Username or Email" 
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            
            <a href="#" className="forgot-password">Forgot password?</a>
            
            <button type="submit">Log in</button>
          </form>
          
          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
