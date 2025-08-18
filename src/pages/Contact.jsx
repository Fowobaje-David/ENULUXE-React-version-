import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Contact form data:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries about properties or services</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            placeholder="Subject" 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <textarea 
            placeholder="Your Message" 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-details">
          <p>📍 123 Real Estate Street, Enugu, Nigeria</p>
          <p>📞 +234 123 456 7890</p>
          <p>✉️ info@enuluxe.ng</p>
        </div>
        
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d7.5!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDAuMCJOIDfCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Enuluxe Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
