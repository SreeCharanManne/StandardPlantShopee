import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Landscaping',
    'Irrigation Systems',
    'Indoor Plantation',
    'Miyawaki Forests',
    'Vertical Gardens',
    'Maintenance Contracts',
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="logo-icon">🌿</span>
                <div className="logo-text">
                  <span className="logo-main">Standard Green Solutions</span>
                  <span className="logo-telugu">స్టాండర్డ్ గ్రీన్ సొల్యూషన్స్</span>
                </div>
              </a>
              <p className="footer-tagline">The Green World Creators....</p>
              <p className="footer-description">
                Vijayawada's trusted name in comprehensive plantation and landscaping solutions. 
                We transform outdoor spaces into vibrant, sustainable, and functional green spaces.
              </p>
              <div className="footer-rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-text">4.5 Rating</span>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>
                  5Route, Dr Ramesh Hospital Rd,<br />
                  opp. ITI College, Prashant Nagar,<br />
                  Vijayawada, AP 520008
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+919490658259">+91 94906 58259</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:sr.standard@yahoo.com">sr.standard@yahoo.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <p>Open Daily: 9 AM - 8 PM</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Standard+Plant+Shoppe/@16.507264,80.655072,20.21z/data=!4m6!3m5!1s0x3a35fac9e34c2cf5:0xc180cd93886ff92f!8m2!3d16.5072231!4d80.6552421!16s%2Fg%2F11gdvzl96l?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Standard Green Solutions. All rights reserved.
            </p>
            <p className="tagline">
              🌱 The Green World Creators 🌱
            </p>
            <div className="footer-badges">
              <span className="badge">🌿 Eco-Friendly</span>
              <span className="badge">🏆 Best in Vijayawada</span>
              <span className="badge">✨ Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;