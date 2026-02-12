import { useState } from 'react';
import './RecentWorks.css';

import img01 from '../imgs/recent-work-01.jpeg';
import img02 from '../imgs/recent-work-02.jpeg';
import img03 from '../imgs/recent-work-03.jpeg';
import img04 from '../imgs/recent-work-04.jpeg';
import img05 from '../imgs/recent-work-05.jpeg';
import img06 from '../imgs/recent-work-06.jpeg';
import img07 from '../imgs/recent-work-07.jpeg';
import img08 from '../imgs/recent-work-08.jpeg';
import img09 from '../imgs/recent-work-09.jpeg';
import img10 from '../imgs/recent-work-10.jpeg';
import img11 from '../imgs/recent-work-11.jpeg';
import img12 from '../imgs/recent-work-12.jpeg';
import img13 from '../imgs/recent-work-13.jpeg';
import img14 from '../imgs/recent-work-14.jpeg';
import img15 from '../imgs/recent-work-15.jpeg';
import img16 from '../imgs/recent-work-16.jpeg';
import img17 from '../imgs/recent-work-17.jpeg';
import img18 from '../imgs/recent-work-18.jpeg';
import img19 from '../imgs/recent-work-19.jpeg';
import img20 from '../imgs/recent-work-20.jpeg';
import img21 from '../imgs/recent-work-21.jpeg';
import img22 from '../imgs/recent-work-22.jpeg';
import img23 from '../imgs/recent-work-23.jpeg';
import img24 from '../imgs/recent-work-24.jpeg';
import img25 from '../imgs/recent-work-25.jpeg';
import img26 from '../imgs/recent-work-26.jpeg';
import img27 from '../imgs/recent-work-27.jpeg';
import img28 from '../imgs/recent-work-28.jpeg';
import img29 from '../imgs/recent-work-29.jpeg';
import img30 from '../imgs/recent-work-30.jpeg';
import img31 from '../imgs/recent-work-31.jpeg';
import img32 from '../imgs/recent-work-32.jpeg';
import img33 from '../imgs/recent-work-33.jpeg';
import img34 from '../imgs/recent-work-34.jpeg';
import img35 from '../imgs/recent-work-35.jpeg';
import img36 from '../imgs/recent-work-36.jpeg';

const recentWorks = [
  img01, img02, img03, img04, img05, img06,
  img07, img08, img09, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36,
];

// Split into two rows for visual variety
const row1 = recentWorks.slice(0, 18);
const row2 = recentWorks.slice(18, 36);

const RecentWorks = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? recentWorks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === recentWorks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="recent-works" className="recent-works section">
      <div className="container">
        <h2 className="section-title">Our Recent Works</h2>
        <p className="section-subtitle">
          Take a look at some of our recent plant installations, garden setups, and custom arrangements
        </p>
      </div>

      <div className="marquee-wrapper">
        {/* Row 1 - scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            {[...row1, ...row1].map((src, i) => (
              <div
                key={`r1-${i}`}
                className="marquee-item"
                onClick={() => openLightbox(i % row1.length)}
              >
                <img src={src} alt={`Recent work ${(i % row1.length) + 1}`} loading="lazy" />
                <div className="marquee-item-overlay">
                  <span className="marquee-zoom-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-right">
            {[...row2, ...row2].map((src, i) => (
              <div
                key={`r2-${i}`}
                className="marquee-item"
                onClick={() => openLightbox((i % row2.length) + 18)}
              >
                <img src={src} alt={`Recent work ${(i % row2.length) + 19}`} loading="lazy" />
                <div className="marquee-item-overlay">
                  <span className="marquee-zoom-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={goToPrev}>‹</button>
            <img
              src={recentWorks[currentIndex]}
              alt={`Recent work ${currentIndex + 1}`}
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={goToNext}>›</button>
            <div className="lightbox-counter">
              {currentIndex + 1} / {recentWorks.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentWorks;