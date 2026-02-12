import './About.css';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Plant Varieties' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '4.5', label: 'Star Rating' },
  ];

  const highlights = [
    {
      icon: '🌱',
      title: 'Wide Plant Variety',
      description: 'Both indoor and outdoor plants with exotic and local varieties'
    },
    {
      icon: '🌿',
      title: 'Organic Products',
      description: 'Premium organic soil, fertilizers, and eco-friendly gardening supplies'
    },
    {
      icon: '🏡',
      title: 'Landscaping Services',
      description: 'Professional landscaping with modern ideas at affordable prices'
    },
    {
      icon: '📦',
      title: 'Plant Rental',
      description: 'Monthly rental plants for offices and event decoration services'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Vijayawada's trusted wholesale plant nursery since over a decade
        </p>

        <div className="about-content">
          <div className="about-info">
            <div className="about-text">
              <h3>Your Green Paradise in Vijayawada</h3>
              <p>
                <strong>Standard Plant Shoppe</strong> (స్టాండర్డ్ ప్లాంట్ షాప్పి) is a premier wholesale 
                plant nursery located in the heart of Vijayawada, Andhra Pradesh. We are passionate 
                about bringing nature closer to homes and offices.
              </p>
              <p>
                Our proprietor, <strong>Mr. Srinivasa Rao</strong>, is known for his cordial nature and 
                deep knowledge of plants. Our staff takes pride in explaining about the wide variety 
                of plants and providing expert guidance on plant care.
              </p>
              <p>
                We offer everything a garden needs - from exotic indoor plants and flowering varieties 
                to succulents, outdoor plants, pots, seeding trays, potting mix, and organic soil. 
                While our prices reflect premium quality, our plants live longer unlike others.
              </p>
            </div>

            <div className="about-features">
              {highlights.map((item, index) => (
                <div key={index} className="about-feature">
                  <span className="about-feature-icon">{item.icon}</span>
                  <div className="about-feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-container">
              <div className="about-badge top-left">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Best in Vijayawada</span>
              </div>
              <div className="about-main-visual">
                <div className="plant-display">
                  <span className="display-plant">🪴</span>
                </div>
                <div className="visual-ring ring-1"></div>
                <div className="visual-ring ring-2"></div>
                <div className="visual-ring ring-3"></div>
              </div>
              <div className="about-badge bottom-right">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;