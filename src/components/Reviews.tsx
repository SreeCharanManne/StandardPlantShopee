import { useState, useEffect, useCallback } from 'react';
import './Reviews.css';

const GOOGLE_URL = 'https://www.google.com/search?sca_esv=dcb567104b2294d0&rlz=1C5GCEM_enUS1116US1116&sxsrf=ANbL-n5e-dBl6cwEmuWjSbYHopVViOi6dw:1770872459928&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTCWfwxD3aePDwUK9DDCGTcYOI581TrHqYgfv-_nvkn7vANqMM1pziLX_80Y0wgi3MsQrNw1OXOn6pvlXOi7krNNmmm6MQc8j9NyE9PNLNWG_HAk8g%3D%3D&q=Standard+Plant+Shoppe+Reviews&sa=X&ved=2ahUKEwi1nqr_ldOSAxVXL1kFHauNLzUQ0bkNegQIOxAF&biw=1728&bih=962&dpr=2';

const REVIEWS = [
  { id: 1, name: 'Kiran mai', badge: '5 reviews', rating: 5, date: '3 months ago', text: 'Got some amazing indoor plants and good organic soil for my house. Also got landscaping from them. Affordable and they come up with modern ideas. Had an amazing experience with staff explaining about wide variety of plants.', avatar: 'KM' },
  { id: 2, name: 'Sharmila P', badge: 'Local Guide', rating: 5, date: '7 years ago', text: 'Nice shop with exotic plants and wide variety. Staff clearly explains how to pot the plant. Everything of garden needs are available. The plants bought here live longer unlike others.', avatar: 'SP' },
  { id: 3, name: 'Vijaya Niranjan', badge: 'Local Guide', rating: 5, date: '8 years ago', text: 'Good variety of both indoor and outdoor plants available. Indoor plants available on monthly rental basis for offices. Proprietor Srinivas is very cordial.', avatar: 'VN' },
  { id: 4, name: 'Kiran Kumar', badge: '3 reviews', rating: 5, date: '5 years ago', text: 'Great place for plants both indoor and outdoor and pots for the plants are awesome. Best place in Vijayawada for these eco-friendly products and organic soil.', avatar: 'KK' },
];

const stars = (n: number) => Array(5).fill(0).map((_, i) => (
  <span key={i} className={`star ${i < n ? 'filled' : ''}`}>&#9733;</span>
));

const Reviews = () => {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  const next = useCallback(() => setCur(p => (p + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setCur(p => (p - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [auto, next]);

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">See what our customers have to say about us</p>
        <div className="reviews-showcase" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
          <div className="reviews-rating-card">
            <div className="big-rating-number">4.5</div>
            <div className="big-rating-stars">{stars(5)}</div>
            <p className="big-rating-label">Google Rating</p>
            <div className="rating-divider"></div>
            <p className="rating-quote">&ldquo;Best place in Vijayawada for eco-friendly products&rdquo;</p>
          </div>
          <div className="reviews-slider">
            <div className="slider-viewport">
              {REVIEWS.map((r, i) => (
                <div key={r.id} className={'slider-slide' + (i === cur ? ' active' : '')}>
                  <div className="slide-quote-mark">&ldquo;</div>
                  <p className="slide-text">{r.text}</p>
                  <div className="slide-author">
                    <div className="slide-avatar">{r.avatar}</div>
                    <div className="slide-author-info">
                      <h4 className="slide-name">{r.name}</h4>
                      <div className="slide-meta">
                        <span className="slide-stars">{stars(r.rating)}</span>
                        <span className="slide-date">{r.date}</span>
                      </div>
                      {r.badge && <span className="slide-badge">{r.badge}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-arrow" onClick={prev}>&#8249;</button>
              <div className="slider-dots">
                {REVIEWS.map((_, i) => (
                  <button key={i} className={'slider-dot' + (i === cur ? ' active' : '')} onClick={() => setCur(i)} />
                ))}
              </div>
              <button className="slider-arrow" onClick={next}>&#8250;</button>
            </div>
          </div>
        </div>
        <div className="reviews-cta">
          <p>Loved our service? Leave us a review!</p>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Write a Review on Google</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
