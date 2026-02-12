import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Kiran mai',
      badge: '5 reviews',
      rating: 5,
      date: '3 months ago',
      text: 'Got some amazing indoor plants and good organic soil for my house… Also got landscaping from them…affordable and they come up with modern ideas… Had an amazing experience with staff …explaining about wide variety of plants',
      avatar: 'SM'
    },
    {
      id: 2,
      name: 'Sharmila P',
      badge: 'Local Guide · 48 reviews',
      rating: 5,
      date: '7 years ago',
      text: 'Nice shop with exotic plants and wide variety. Staff clearly explains how to pot the plant. Pots, seeding tray, indoor, outdoor potting mix, etc everything of garden needs are available. Price range is expensive side but worth it. The plants bought here live longer unlike others.',
      avatar: 'SP'
    },
    {
      id: 3,
      name: 'Vijaya Niranjan',
      badge: 'Local Guide · 4 reviews',
      rating: 5,
      date: '8 years ago',
      text: 'Good variety of both in door and out door plants available. Indoor plants available on monthly rental basis for offices. For occasions we can take the plants on rental for decorating. Proprietor Srinivas is very cordial.',
      avatar: 'VN'
    },
    {
      id: 4,
      name: 'Kiran Kumar',
      badge: '3 reviews',
      rating: 5,
      date: '5 years ago',
      text: 'Great place for plants both indoor and outdoor and pots for the plants are awesome. Best place in Vijayawada for these eco-friendly products and organic soil',
      avatar: 'CM'
    }
  ];

  const highlights = [
    { text: '"Had an amazing experience with staff …explaining about wide variety of plants"', icon: '💬' },
    { text: '"Best place in Vijayawada for these eco-friendly products and organic soil"', icon: '🌿' },
    { text: '"Good maintenance and service"', icon: '⭐' }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">
          See what our customers have to say about us
        </p>

        <div className="reviews-header">
          <div className="rating-overview">
            <div className="big-rating">
              <span className="rating-number">4.5</span>
              <div className="rating-stars">
                {renderStars(5)}
              </div>
              <span className="rating-count"></span>
            </div>
          </div>
          <div className="rating-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">{highlight.icon}</span>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  {review.badge && <span className="reviewer-badge">{review.badge}</span>}
                </div>
              </div>
              <div className="review-rating">
                {renderStars(review.rating)}
                <span className="review-date">{review.date}</span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <p>Loved our service? Leave us a review!</p>
          <a 
            href="https://www.google.com/search?sca_esv=dcb567104b2294d0&rlz=1C5GCEM_enUS1116US1116&sxsrf=ANbL-n5e-dBl6cwEmuWjSbYHopVViOi6dw:1770872459928&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTCWfwxD3aePDwUK9DDCGTcYOI581TrHqYgfv-_nvkn7vANqMM1pziLX_80Y0wgi3MsQrNw1OXOn6pvlXOi7krNNmmm6MQc8j9NyE9PNLNWG_HAk8g%3D%3D&q=Standard+Plant+Shoppe+Reviews&sa=X&ved=2ahUKEwi1nqr_ldOSAxVXL1kFHauNLzUQ0bkNegQIOxAF&biw=1728&bih=962&dpr=2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Write a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;