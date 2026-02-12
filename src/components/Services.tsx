import './Services.css';

const Services = () => {
  const coreServices = [
    {
      icon: '🌳',
      title: 'Landscaping',
      description: 'Land clearing, levelling, adding compost/manure, preparing soil beds, supplying and planting of all varieties of plants.',
      features: ['Land preparation', 'Soil bed design', 'Plant installation']
    },
    {
      icon: '💧',
      title: 'Irrigation Systems',
      description: 'Drip irrigation, sprinklers, timer-based irrigation systems and water conservation methods for efficient watering.',
      features: ['Drip irrigation', 'Sprinkler systems', 'Timer-based automation']
    },
    {
      icon: '🏢',
      title: 'Indoor Plantation',
      description: 'Design and develop refreshing indoor spaces with suitable plants and planters. Services include plant selection, potting, placement, and maintenance.',
      features: ['Plant selection', 'Potting & placement', 'Regular maintenance']
    },
    {
      icon: '🌲',
      title: 'Miyawaki Forest',
      description: 'Eco-friendly dense forest plantation using the Miyawaki method for rapid urban forest creation.',
      features: ['Dense plantation', 'Native species', 'Rapid growth']
    },
    {
      icon: '🛡️',
      title: 'Plant Protection',
      description: 'Installing tree guards, fencing, mulching, and protective covers. Pest & disease management with preventive treatments.',
      features: ['Tree guards & fencing', 'Mulching', 'Pest control']
    },
    {
      icon: '✂️',
      title: 'Maintenance Contracts',
      description: 'Annual, seasonal, or on-demand maintenance including survival monitoring, weeding, pruning, irrigation, and replacement of dead plants.',
      features: ['Weeding & pruning', 'Fertilization', 'Plant replacement']
    }
  ];

  const specialProjects = [
    { icon: '🏔️', title: 'Stone Symphony', description: 'Stone to Sculpture - Transforming raw stone into beautiful garden art' },
    { icon: '🌴', title: 'Tropical Garden', description: 'Create exotic tropical paradise in your space' },
    { icon: '🌿', title: 'Vertical Garden', description: 'Green walls and vertical landscapes for modern spaces' },
    { icon: '🏠', title: 'Roof Garden', description: 'Transform your rooftop into a green oasis' },
    { icon: '🅿️', title: 'Grass Pavers', description: 'Eco-friendly parking and pathway solutions' },
    { icon: '🐟', title: 'Pond Making', description: 'Beautiful water features and fish ponds' },
    { icon: '🏛️', title: 'Pergola Work', description: 'Elegant outdoor structures with climbing plants' },
    { icon: '⛲', title: 'Waterfalls & Fountains', description: 'Natural waterfall and fountain installations' },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive plantation and landscaping solutions for all your green needs
        </p>

        <div className="services-grid">
          {coreServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="special-projects">
          <h3 className="special-projects-title">Transformations We Create</h3>
          <p className="special-projects-subtitle">From bare to beautiful — explore our signature projects</p>
          <div className="special-projects-grid">
            {specialProjects.map((project, index) => (
              <div key={index} className="special-project-card">
                <span className="project-icon">{project.icon}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Let's Build Your Green Vision 🌱</h3>
            <p>Expert consultancy for government, corporate, real estate, and institutional plantation projects</p>
          </div>
          <div className="cta-button-wrapper">
            <span className="cta-pointer">👉</span>
            <a href="#contact-form" className="btn btn-primary cta-pulse-btn">Get a Quote</a>
            <span className="cta-pointer right">👉</span>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Services;