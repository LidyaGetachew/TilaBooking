import React, { useState } from 'react';
import "../components/AboutUs/contactUs.css"
import NewsLetter from '../shared/Newsletter';
import SocialsSection from '../components/socials/SocialsSection';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    // For simplicity, this example just logs the form data to the console
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      firstName:'',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='contact-us-container'>
      <div className='contact-us-hero'>
        <div className="contact-us-title">Contact us</div>
        <div className="contact-us-description">
            Need to get in touch with us? either fill out the form with 
            your inquiry or contact us with other methods below.
            </div>
      </div>
      <div className="contact-us-form" >
        <form onSubmit={handleSubmit}>
            <div className='label-input-container'>
            <label htmlFor="firstName" className='required-label'>First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            </div>
            <div className='label-input-container'>
            <label htmlFor="lastName" className='required-label'>Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            </div>
            <div className='label-input-container'>
            <label htmlFor="email" className='required-label'>Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className='label-input-container'>
            <label htmlFor="message" className='required-label'>Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>
            <button className='major-button full-width' type="submit">Submit</button>
        </form>
      </div>
      <div className="socials-section">
         <SocialsSection />

      </div>
      <NewsLetter />
    </div>
  );
};

export default ContactPage;