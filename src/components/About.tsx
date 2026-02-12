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
      icon: '🌳',
      title: 'Complete Landscaping',
      description: 'Land clearing, levelling, soil preparation, and planting of all plant varieties'
    },
    {
      icon: '💧',
      title: 'Irrigation Systems',
      description: 'Drip irrigation, sprinklers, timer-based systems and water conservation'
    },
    {
      icon: '🏢',
      title: 'Indoor Plantation',
      description: 'Refreshing indoor spaces with suitable plants, planters, and maintenance'
    },
    {
      icon: '🌲',
      title: 'Miyawaki Forests',
      description: 'Eco-friendly dense forest plantation using the Miyawaki method'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          The Green World Creators — Transforming spaces into living works of art
        </p>

        <div className="about-content">
          <div className="about-info">
            <div className="about-text">
              <h3>Standard Green Solutions</h3>
              <p>
                <strong>Standard Green Solutions</strong>, based in Vijayawada, is a trusted name in 
                comprehensive plantation and landscaping solutions. We specialise in creating vibrant 
                green spaces that blend beauty, sustainability, and functionality.
              </p>
              <p>
                From luxurious gardens and vertical landscapes to innovative water features and 
                eco-friendly Miyawaki forests, we transform outdoor spaces into living works of art. 
                Our expertise extends to irrigation systems, turfing, roof gardens, pergolas, and more.
              </p>
              <p>
                At Standard Green Solutions, we believe in nurturing nature while enhancing the 
                aesthetic and environmental value of every space. Every project is meticulously 
                designed and executed with precision.
              </p>
            </div>

            <div className="about-mission">
              <h4>🎯 Our Mission</h4>
              <p>
                To create sustainable and aesthetically pleasing green spaces that enhance the 
                environment and improve quality of life. We are committed to innovative plantation 
                and landscaping solutions, using eco-friendly practices and modern techniques to 
                transform every outdoor space into a thriving, harmonious, and vibrant ecosystem.
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