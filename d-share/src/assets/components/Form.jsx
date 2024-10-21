import React, { useRef, useState, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import '../../Form.scss';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RATE_LIMIT_TIME = 60000; // 1 minute in milliseconds

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (name.length === 0) newErrors.name = 'Name is required';
    if (email.length === 0) newErrors.email = 'Email is required';
    else if (!EMAIL_REGEX.test(email)) newErrors.email = 'Invalid email format';
    if (message.length === 0) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  const sanitizeInput = useCallback((input) => {
    return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  }, []);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_TIME) {
      setStatus(`Please wait ${Math.ceil((RATE_LIMIT_TIME - (now - lastSubmitTime)) / 1000)} seconds before sending another message.`);
      return;
    }
  
    setIsLoading(true);
    setStatus('Sending...');
  
    const sanitizedForm = {
      name: sanitizeInput(form.current.user_name.value),
      email: sanitizeInput(form.current.user_email.value),
      message: sanitizeInput(form.current.message.value)
    };
  
    try {
      // Invia la richiesta POST al tuo backend Fastify
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sanitizedForm)
      });
  
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        form.current.reset();
        setLastSubmitTime(now);
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [lastSubmitTime, sanitizeInput, validateForm]);
  

  useEffect(() => {
    let timer;
    if (status) {
      timer = setTimeout(() => setStatus(''), 5000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="contact-form-container">
        <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input 
            type="text" 
            name="user_name" 
            id="user_name" 
            required 
            maxLength="50" 
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input 
            type="email" 
            name="user_email" 
            id="user_email" 
            required 
            maxLength="100" 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            required 
            rows="4" 
            maxLength="1000"
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <div className="form-group">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
      {status && <p className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>{status}</p>}
    </div>
  );
}