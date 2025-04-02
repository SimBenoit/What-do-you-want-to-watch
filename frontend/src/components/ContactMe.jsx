import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';
import "./Text.css";

const ContactMe = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        try {
          const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            navigate('/')
            alert('Message sent!');
          } else {
            alert('Failed to send message');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong');
        }
      };

    return (
        <div className="contact-me">
            <h1 className='title'>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input className="form-input" onChange={handleChange} type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input className="form-input" onChange={handleChange} type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea className="form-textarea" onChange={handleChange} id="message" name="message" rows="4" required></textarea>

            <button className="form-button" type="submit">Send</button>
        </form>
        </div>
    );
    }

    export default ContactMe;
