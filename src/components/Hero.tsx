import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="star">⭐</span>
            <span>4.5 Rating • 31 Reviews</span>
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
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="plant-card plant-1">
              <span className="plant-emoji">🌿</span>
              <span className="plant-name">Indoor Plants</span>
            </div>
            <div className="plant-card plant-2">
              <span className="plant-emoji">🌺</span>
              <span className="plant-name">Flowering Plants</span>
            </div>
            <div className="plant-card plant-3">
              <span className="plant-emoji">🌵</span>
              <span className="plant-name">Succulents</span>
            </div>
            <div className="plant-card plant-4">
              <span className="plant-emoji">🌳</span>
              <span className="plant-name">Outdoor Plants</span>
            </div>
            <div className="center-circle">
              <span className="big-plant">🪴</span>
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