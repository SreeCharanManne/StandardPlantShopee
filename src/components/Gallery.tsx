import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Plants' },
    { id: 'indoor', name: 'Indoor' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'flowering', name: 'Flowering' },
    { id: 'succulents', name: 'Succulents' },
    { id: 'pots', name: 'Pots' },
  ];

  const plants = [
    { id: 1, name: 'Money Plant', category: 'indoor', emoji: '🌿' },
    { id: 2, name: 'Peace Lily', category: 'indoor', emoji: '🪷' },
    { id: 3, name: 'Snake Plant', category: 'indoor', emoji: '🌱' },
    { id: 4, name: 'Hibiscus', category: 'flowering', emoji: '🌺' },
    { id: 5, name: 'Rose Plant', category: 'flowering', emoji: '🌹' },
    { id: 6, name: 'Jasmine', category: 'flowering', emoji: '🌸' },
    { id: 7, name: 'Mango Tree', category: 'outdoor', emoji: '🥭' },
    { id: 8, name: 'Neem Tree', category: 'outdoor', emoji: '🌳' },
    { id: 9, name: 'Aloe Vera', category: 'succulents', emoji: '🌵' },
    { id: 10, name: 'Echeveria', category: 'succulents', emoji: '🪴' },
    { id: 11, name: 'Terracotta Pot', category: 'pots', emoji: '🏺' },
    { id: 12, name: 'Designer Planter', category: 'pots', emoji: '🪴' },
  ];

  const filteredPlants = activeFilter === 'all' 
    ? plants 
    : plants.filter(plant => plant.category === activeFilter);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 className="section-title">Our Collection</h2>
        <p className="section-subtitle">
          Explore our wide variety of plants and gardening supplies
        </p>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="gallery-item">
              <div className="gallery-image">
                <span className="plant-emoji-large">{plant.emoji}</span>
              </div>
              <div className="gallery-info">
                <h4 className="plant-title">{plant.name}</h4>
                <span className="plant-category">{plant.category}</span>
              </div>
              <div className="gallery-overlay">
                <a href="#contact" className="btn btn-primary">Enquire Now</a>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>
            <span className="note-icon">💡</span>
            <strong>Note:</strong> Visit our store for the complete collection. 
            Contact us for pricing and availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;