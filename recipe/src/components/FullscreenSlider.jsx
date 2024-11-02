import React, { useState, useEffect } from 'react';
import './FullscreenSlider.css';

const FullscreenSlider = () => {
  const images = [
    'https://avatars.githubusercontent.com/u/125330079?v=4',
    'https://redux.js.org/img/redux.svg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 4000; // Change interval time as needed

  useEffect(() => {
    if (images.length === 0) return;

    const nextImage = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(nextImage);
  }, [images, interval]);

  if (images.length === 0) {
    return <div className="fullscreen-slider">No images to display</div>;
  }

  return (
    <div
      className="fullscreen-slider"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    />
  );
};

export default FullscreenSlider;
