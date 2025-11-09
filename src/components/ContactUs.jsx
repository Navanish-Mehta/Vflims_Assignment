import React, { useState } from 'react';
import bg from '../assets/images/Contact Us Section/BG.png';
import upperDesign from '../assets/images/Contact Us Section/FooterLower.png';
import lowerDesign from '../assets/images/Contact Us Section/FooterLower.png';

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Email validation regex
  const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form validation
  const validateForm = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('All fields are required.');
      return false;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    if (!validateForm()) return;
    
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (res.ok) {
        setSuccess('Thank you! Your message has been sent successfully.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        try {
          const data = await res.json();
          setError(data.message || data.error || 'Submission failed. Please try again.');
        } catch {
          setError('Submission failed. Please try again.');
        }
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Form submission error:', err);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Upper Design */}
      <img
        src={upperDesign}
        alt="Upper Design"
        className="absolute right-0 top-0 w-[200px] sm:w-[300px] md:w-[380px] lg:w-[420px] z-10 rotate-[180deg] opacity-60 sm:opacity-100"
        style={{ pointerEvents: 'none' }}
      />
      {/* Lower Design */}
      <img
        src={lowerDesign}
        alt="Lower Design"
        className="absolute left-0 bottom-0 w-[180px] sm:w-[280px] md:w-[360px] lg:w-[400px] z-10 opacity-60 sm:opacity-100"
        style={{ pointerEvents: 'none' }}
      />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex flex-col lg:flex-row items-start justify-between min-h-[500px] sm:min-h-[600px]">
        {/* Left Side Text */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="text-left text-[clamp(16px,2.5vw,20px)] text-[#2c2c2c] font-sans leading-relaxed max-w-lg mx-auto lg:mx-0 ml-0 lg:ml-8 px-4 lg:px-0">
            <p>
              Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.<br />
              Let's catch up over coffee.<br />
              Great stories always begin with a good conversation
            </p>
          </div>
        </div>
        {/* Right Side Form */}
        <div className="w-full lg:w-[52%] flex flex-col items-center pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-0">
          <h2 className="font-serif text-[clamp(24px,4vw,32px)] text-[#2c2c2c] text-center mb-2">
            Join the Story
          </h2>
          <p className="text-[clamp(14px,2.2vw,18px)] text-[#2c2c2c] font-sans text-center mb-4 sm:mb-6">
            Ready to bring your vision to life? Let's talk.
          </p>
          <form
            className="w-full max-w-xl flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              placeholder="Your name*"
              className="border border-[#ddd] rounded-md px-4 py-2.5 sm:py-3 text-[clamp(14px,1.8vw,16px)] focus:outline-none focus:border-[#FF6B35] transition-colors"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your email*"
              className="border border-[#ddd] rounded-md px-4 py-2.5 sm:py-3 text-[clamp(14px,1.8vw,16px)] focus:outline-none focus:border-[#FF6B35] transition-colors"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subject*"
              className="border border-[#ddd] rounded-md px-4 py-2.5 sm:py-3 text-[clamp(14px,1.8vw,16px)] focus:outline-none focus:border-[#FF6B35] transition-colors"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              placeholder="Your message*"
              className="border border-[#ddd] rounded-md px-4 py-2.5 sm:py-3 text-[clamp(14px,1.8vw,16px)] focus:outline-none min-h-[100px] resize-none focus:border-[#FF6B35] transition-colors"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
            {error && (
              <div className="text-red-500 text-sm mt-1 sm:mt-2 px-1">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-sm mt-1 sm:mt-2 px-1">{success}</div>
            )}
            <button
              type="submit"
              className="bg-[#FF6B35] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full shadow-md text-[clamp(14px,1.8vw,16px)] mt-2 self-center hover:bg-[#E86A33] transition-colors"
            >
              Submit
            </button>
          </form>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8 gap-2 sm:gap-4 px-4">
            <span className="text-[#FF6B35] font-semibold text-[clamp(12px,1.8vw,16px)] text-center sm:text-left break-all">
              vermita@varnanfilms.co.in
            </span>
            <span className="hidden sm:inline text-[#FF6B35] font-semibold text-[clamp(12px,1.8vw,16px)]">
              |
            </span>
            <span className="text-[#FF6B35] font-semibold text-[clamp(12px,1.8vw,16px)]">
              +91 98736 84567
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;