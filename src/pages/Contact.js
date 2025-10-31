// src/pages/Contact.js
import React, { useState } from "react";
import axios from "axios";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblpzpnr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmissionStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await axios.post(FORMSPREE_ENDPOINT, formData);

      if (response.status === 200 || response.status === 204) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }

    } catch (error) {
      console.error("Error saat mengirim formulir:", error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>

      <div className="contact-container">
        
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group-row">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="your.email@example.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <input 
            type="text" 
            name="subject" 
            placeholder="What's this about?" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />

          <textarea 
            name="message" 
            placeholder="Tell me about your project..." 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          
          <button 
            type="submit" 
            className="send-button"
            disabled={submissionStatus === 'submitting'}
          >
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {submissionStatus === 'success' && <p style={{color: 'green', marginTop: '10px'}}>Pesan Anda berhasil dikirim!</p>}
          {submissionStatus === 'error' && <p style={{color: 'red', marginTop: '10px'}}>Gagal mengirim pesan. Silakan coba lagi nanti.</p>}

        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: panjiwiryapastika@gmail.com</p>
          <p>Phone: +62 822 8415 5665</p>
          <p>Location: Pekanbaru, IDN</p>

          <div className="lets-work-together">
            <h3>Let's Work Together</h3>
            <p>I'm currently available for freelance work and exciting new opportunities. Let's create something amazing together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;