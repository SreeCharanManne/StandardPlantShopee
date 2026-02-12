import { useState, FormEvent } from 'react';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'daa3528d-bd9d-4041-8cd4-9e1254aedfa7',
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          subject: 'Quick Inquiry from Standard Plant Shoppe Website',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="star">⭐</span>
            <span>4.5 Rating</span>
          </div>
          <h1 className="hero-title">
            Welcome to<br />
            <span className="highlight">Standard Plant Shoppe</span>
          </h1>
          <p className="hero-subtitle">
            స్టాండర్డ్ ప్లాంట్ షాప్పి
          </p>
          <p className="hero-description">
            Vijayawada's Premier Wholesale Plant Nursery - Your one-stop destination for 
            exotic indoor & outdoor plants, organic soil, and eco-friendly gardening products.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">🌱</span>
              <span>Indoor & Outdoor Plants</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">🌿</span>
              <span>Organic Soil</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">🏡</span>
              <span>Landscaping Services</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Visit Us Today
            </a>
            <a href="#gallery" className="btn btn-secondary">
              View Our Plants
            </a>
          </div>
          <div className="hero-status">
            <span className="status-dot open"></span>
            <span>Open Now • Closes 8 PM</span>
          </div>
        </div>
        <div className="hero-form-container">
          <div className="hero-form-card">
            <h3 className="hero-form-title">
              <span className="form-icon">📞</span>
              Quick Inquiry
            </h3>
            <p className="hero-form-subtitle">Get in touch with us today!</p>
            
            <form onSubmit={handleSubmit} className="hero-contact-form">
              <div className="hero-form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="hero-form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="hero-form-group">
                <textarea
                  placeholder="What plants are you looking for?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary hero-submit-btn"
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="hero-form-message success">
                  ✅ Thanks! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="hero-form-message error">
                  ❌ Something went wrong. Please call us directly.
                </div>
              )}
            </form>

            <div className="hero-form-footer">
              <span className="call-text">Or call us directly:</span>
              <a href="tel:+919490658259" className="hero-phone-link">
                📱 +91 94906 58259
              </a>
            </div>
          </div>
        </div>
      </div>
      <button 
        className="scroll-indicator"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </button>
    </section>
  );
};

export default Hero;