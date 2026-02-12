import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Two access keys for two different email recipients
    const accessKeys = [
      'daa3528d-bd9d-4041-8cd4-9e1254aedfa7', // Primary email (from Web3Forms dashboard)
      '60681bfb-7c0a-47b2-9541-434d9dcad2ab', // Second email - Create new access key at web3forms.com for this email
    ];

    const formPayload = {
      subject: `New inquiry from ${formData.name} - Standard Plant Shoppe`,
      from_name: formData.name,
      ...formData
    };

    try {
      // Submit to both access keys in parallel
      const responses = await Promise.all(
        accessKeys.map(access_key =>
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key,
              ...formPayload
            }),
          })
        )
      );

      // Check if at least one submission succeeded
      const anySuccess = responses.some(response => response.ok);

      if (anySuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 8:00 PM' },
  ];

  const popularTimes = [
    { time: '6 AM', busy: 10 },
    { time: '9 AM', busy: 30 },
    { time: '12 PM', busy: 60 },
    { time: '3 PM', busy: 80 },
    { time: '6 PM', busy: 50 },
    { time: '9 PM', busy: 20 },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <p className="section-subtitle">
          Come explore our nursery and find the perfect plants for your space
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Location</h3>
                <p>5Route, Dr Ramesh Hospital Rd,</p>
                <p>opp. ITI College, Prashant Nagar,</p>
                <p>LIC Colony, Vijayawada,</p>
                <p>Andhra Pradesh 520008, India</p>
                <span className="plus-code">GM44+V3 Vijayawada</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <a href="tel:+919490658259" className="phone-link">+91 94906 58259</a>
                <p className="phone-note">Call us for enquiries or orders</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  {businessHours.map((item, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="popular-times-card">
              <h3>
                <span className="times-icon">📊</span>
                Popular Times
              </h3>
              <div className="times-chart">
                {popularTimes.map((item, index) => (
                  <div key={index} className="time-bar-container">
                    <div 
                      className="time-bar" 
                      style={{ height: `${item.busy}%` }}
                    ></div>
                    <span className="time-label">{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="times-note">
                <span className="live-indicator"></span>
                You are always Welcome!!
              </p>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.2361082458!2d80.6549471!3d16.5072231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fac9e34c2cf5%3A0xc180cd93886ff92f!2sStandard%20Plant%20Shoppe!5e0!3m2!1sen!2sin!4v1707696000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standard Plant Shoppe Location"
              ></iframe>
            </div>
            <div className="map-actions">
              <a 
                href="https://www.google.com/maps/place/Standard+Plant+Shoppe/@16.507264,80.655072,20.21z/data=!4m6!3m5!1s0x3a35fac9e34c2cf5:0xc180cd93886ff92f!8m2!3d16.5072231!4d80.6552421!16s%2Fg%2F11gdvzl96l?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                <span>🗺️</span>
                Get Directions
              </a>
              <a 
                href="tel:+919490658259"
                className="map-btn"
              >
                <span>📱</span>
                Send to Phone
              </a>
              <button 
                className="map-btn"
                onClick={() => navigator.share?.({ 
                  title: 'Standard Plant Shoppe', 
                  url: 'https://maps.google.com/?q=Standard+Plant+Shoppe+Vijayawada' 
                })}
              >
                <span>📤</span>
                Share
              </button>
            </div>
          </div>
        </div>

        <div id="contact-form" className="contact-form-section">
          <h3>📬 Send Us a Message</h3>
          <p className="form-subtitle">Have questions about plants or want to place an order? Fill out the form below and we'll get back to you!</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com (optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what plants you're looking for, or ask any questions..."
                rows={5}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '📤 Sending...' : '🌿 Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-message success">
                ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                ❌ Oops! Something went wrong. Please try again or call us directly.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;