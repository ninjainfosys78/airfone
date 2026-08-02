import React from 'react';
import './HorizontalCarousel.css';

interface CarouselImage {
  src: string;
  label: string;
}

interface HorizontalCarouselProps {
  images: CarouselImage[];
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ images }) => {
  if (images.length === 0) return null;

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="horizontal-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicatedImages.map((image, idx) => (
            <div key={idx} className="carousel-card">
              <img src={image.src} alt={image.label} loading="lazy" />
              <div className="card-overlay">
                <p className="card-label">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
