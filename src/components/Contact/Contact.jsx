import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can handle form submission, like sending the data to an API
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      message,
    });

    // Clear form fields after submission (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h2 className='contact-h2'>Contact Us</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="map-section">
      <h3>Our Location</h3> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.859004066765!2d4.40104711590538!3d50.836671979530245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38942385397%3A0x54ebf6f6934b88f!2sAvenue%20de%20Tervueren%20142%2C%201150%20Bruxelles%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1635593895638!5m2!1sen!2sbe"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="location">
              <p>Add: Avenue de Tervueren 142, 1150 Bruxelles, Belgium</p>
         </div>

      <div className="link-container">
        <Link className="link" to="mailto:info@hyfbe.be">info@hyfbe.be</Link>
      </div>

    </div>
  );
};

export default Contact;
