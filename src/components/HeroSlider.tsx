import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const hero = document.querySelector('.hero') as HTMLElement;
    if (hero && images[currentImageIndex]) {
      const imageUrl = images[currentImageIndex];
      hero.style.backgroundImage = `linear-gradient(135deg, rgba(15, 20, 25, 0.65) 0%, rgba(22, 160, 133, 0.1) 100%), url('${imageUrl}')`;
    }
  }, [currentImageIndex, images]);

  return null;
};

export default HeroSlider;
