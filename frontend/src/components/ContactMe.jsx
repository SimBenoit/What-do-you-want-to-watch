import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactMe.css';
import "./Text.css";

const ContactMe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    try{
      const res = await fetch("/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken })
      });

      if (res.ok) {
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

        <div className='captcha-wrapper'>
          <ReCAPTCHA
            sitekey="6LfIwRgrAAAAAFIRT-smi_pE0P0X1PvmSYlyEnqb"
            onChange={token => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken("")}
            size="normal"
          />
        </div>

        <button className="form-button" type="submit" disabled={!captchaToken}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
