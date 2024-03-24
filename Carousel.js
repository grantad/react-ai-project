import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  // Assuming you have some images to display in the carousel
  const images = [
    'https://upload.wikimedia.org/wikipedia/en/7/7d/X-Men_%2797_logo.jpeg',
    'url_to_second_image.jpg',
    'url_to_third_image.jpg',
    // Add more images as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={goToPreviousImage}>
        &#60;
      </button>
      <img src={images[currentImageIndex]} alt="carousel" className="carousel__image" />
      <button className="carousel__button carousel__button--right" onClick={goToNextImage}>
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
