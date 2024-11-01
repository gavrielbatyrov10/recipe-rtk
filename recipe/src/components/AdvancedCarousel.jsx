import React, { useEffect, useState } from 'react';
import './AdvancedCarousel.css';

const AdvancedCarousel = () => {
  const items = [
    {
      title: "Item 1",
      description: "This is the description for item 1",
      image: "https://redux.js.org/img/redux.svg",
    },
    {
      title: "Item 2",
      description: "This is the description for item 2",
      image: "https://avatars.githubusercontent.com/u/125330079?v=4",
    },
    {
      title: "Item 3",
      description: "This is the description for item 3",
      image: "https://redux.js.org/img/redux.svg",
    },
    {
      title: "Item 4",
      description: "This is the description for item 4",
      image: "https://avatars.githubusercontent.com/u/125330079?v=4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-card ${currentIndex === index ? 'active' : 'hidden'}`}
          >
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn left" onClick={goToPrevious} aria-label="Scroll left">&lt;</button>
      <button className="carousel-btn right" onClick={goToNext} aria-label="Scroll right">&gt;</button>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            role="button"
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvancedCarousel;
