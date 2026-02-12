import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌿',
      title: 'Indoor Plants',
      description: 'Wide variety of air-purifying and decorative indoor plants perfect for homes and offices. Available on monthly rental basis for corporate spaces.',
      features: ['Air-purifying plants', 'Low maintenance varieties', 'Monthly rental available']
    },
    {
      icon: '🌳',
      title: 'Outdoor Plants',
      description: 'Beautiful outdoor plants including flowering plants, fruit trees, and ornamental varieties to transform your garden.',
      features: ['Flowering plants', 'Fruit trees', 'Ornamental varieties']
    },
    {
      icon: '🪴',
      title: 'Pots & Containers',
      description: 'Premium quality pots in various sizes, designs, and materials. From terracotta to modern designer pots.',
      features: ['Terracotta pots', 'Designer planters', 'Seeding trays']
    },
    {
      icon: '🌱',
      title: 'Organic Soil & Fertilizers',
      description: 'High-quality organic potting mix, soil amendments, and eco-friendly fertilizers for healthy plant growth.',
      features: ['Organic potting mix', 'Compost', 'Bio-fertilizers']
    },
    {
      icon: '🏡',
      title: 'Landscaping Services',
      description: 'Professional landscaping services with modern ideas. We design and create beautiful gardens at affordable prices.',
      features: ['Garden design', 'Installation', 'Modern concepts']
    },
    {
      icon: '🎉',
      title: 'Event Decoration',
      description: 'Plant rental services for occasions and events. Transform your venue with beautiful green decorations.',
      features: ['Wedding decoration', 'Corporate events', 'Festival setup']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive gardening solutions for all your green needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
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

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need Custom Landscaping?</h3>
            <p>We offer personalized landscaping solutions with modern ideas at affordable prices</p>
          </div>
          <a href="#contact-form" className="btn btn-primary">Get a Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Services;