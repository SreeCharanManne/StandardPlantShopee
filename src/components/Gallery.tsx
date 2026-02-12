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
    { id: 1, name: 'Money Plant', category: 'indoor', image: 'https://shop.banneechen.com.sg/cdn/shop/products/MoneyPlant10C-1.jpg?v=1653097006' },
    { id: 2, name: 'Peace Lily', category: 'indoor', image: 'https://growhub.ae/cdn/shop/files/Peace_Lily_eefb9e63-7102-46df-a713-f2de235d52e3.jpg?v=1761047486&width=700' },
    { id: 3, name: 'Snake Plant', category: 'indoor', image: 'https://www.houseplant.co.uk/cdn/shop/files/Dracaena_Sansevieria_Trifasciata_Snake_Plant_Tropical_Indoor_Exotic_Variegated_Easy_Houseplant.jpg?v=1737984812' },
    { id: 4, name: 'Hibiscus', category: 'flowering', image: 'https://nurserynisarga.in/wp-content/uploads/2022/01/Hibiscus.webp' },
    { id: 5, name: 'Rose Plant', category: 'flowering', image: 'https://cdn.gardenplantnursery.shop/2026/02/miniature-rose-plant-live-3-potted-compact-floweri-34b17214.webp' },
    { id: 6, name: 'Jasmine', category: 'flowering', image: 'https://i5.walmartimages.com/seo/Sambac-Jasmine-Flower-Plant-5-7-Inches-Starter-Plant-Climbing-Jasmine-Live-Plant-in-3-5-Inches-Pot-Fragrant-Flowers-for-Indoor-Growing_d9591904-4a41-49ca-a930-1f5927928faa.5477bd30acfc96eb196e622590e4b78e.png?odnHeight=573&odnWidth=573&odnBg=FFFFFF' },
    { id: 7, name: 'Mango Tree', category: 'outdoor', image: 'https://i.etsystatic.com/63763139/r/il/3a9b4c/7665691357/il_1588xN.7665691357_siqx.jpg' },
    { id: 8, name: 'Neem Tree', category: 'outdoor', image: 'https://img.everymarket.com/18c8h0bgzyv1x5rdyk5fan4402ya?width=800&height=800&format=jpg' },
    { id: 9, name: 'Aloe Vera', category: 'succulents', image: 'https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Aloe_Vera.jpg' },
    { id: 10, name: 'Echeveria', category: 'succulents', image: 'https://i.etsystatic.com/23562859/r/il/0c2e7c/4171217112/il_1588xN.4171217112_90dw.jpg' },
    { id: 11, name: 'Terracotta Pot', category: 'pots', image: 'https://cdn11.bigcommerce.com/s-tjkzylcpjz/images/stencil/1920w/products/1188/3044/Cylinder-1__25095.1678203796.jpg?c=1' },
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
                <img src={plant.image} alt={plant.name} loading="lazy" />
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