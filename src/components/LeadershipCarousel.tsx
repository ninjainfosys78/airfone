import React, { useState, useEffect } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import './LeadershipCarousel.css';

interface Leader {
  id: string;
  name: string;
  role: string;
  phone: string;
  image: string;
}

interface LeadershipCarouselProps {
  locale?: 'en' | 'ne';
}

export default function LeadershipCarousel({ locale = 'en' }: LeadershipCarouselProps) {
  const isNe = locale === 'ne';

  const leaders: Leader[] = [
    {
      id: '1',
      name: isNe ? 'गुमान सिंह अर्याल' : 'Guman Singh Aryal',
      role: isNe ? 'नगर प्रमुख (Mayor)' : 'Mayor',
      phone: isNe ? '९८५६०४६५१०' : '9856046510',
      image: '/images/mayor.jpg',
    },
    {
      id: '2',
      name: isNe ? 'पद्मा गुरुङ' : 'Padma Gurung',
      role: isNe ? 'उप-नगर प्रमुख (Deputy Mayor)' : 'Deputy Mayor',
      phone: isNe ? '९८५६०४६५११' : '9856046511',
      image: '/images/deputy-mayor.jpg',
    },
    {
      id: '3',
      name: isNe ? 'हरिश्चन्द्र ढकाल' : 'Harish Chandra Dhakal',
      role: isNe ? 'प्रमुख प्रशासकीय अधिकृत (CAO)' : 'Chief Administrative Officer',
      phone: isNe ? '९८५६०४६५१२' : '9856046512',
      image: '/images/cao.jpg',
    },
    {
      id: '4',
      name: isNe ? 'सञ्जीव रिजाल' : 'Sanjiv Rijal',
      role: isNe ? 'सूचना अधिकारी (Info Officer)' : 'Information Officer',
      phone: isNe ? '९८५६०४६५१५' : '9856046515',
      image: '/images/info-officer.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);

  // Update visible cards count based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(2);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, leaders.length - visibleCards);

  // Auto slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="leadership-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Controls Bar: Previous & Next Buttons */}
      <div className="carousel-top-bar">
        <button
          onClick={handlePrev}
          className="carousel-btn prev-btn"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
          <span>{isNe ? 'अघिल्लो' : 'Previous'}</span>
        </button>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="carousel-btn next-btn"
          aria-label="Next Slide"
        >
          <span>{isNe ? 'पछिल्लो' : 'Next'}</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Carousel Track */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="carousel-card-item"
              style={{ flex: `0 0 ${100 / visibleCards}%` }}
            >
              <div className="leader-card-inner">
                <div className="leader-image-box">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-details">
                  <span className="leader-role-badge">{leader.role}</span>
                  <h3 className="leader-full-name">{leader.name}</h3>
                  <a href={`tel:${leader.phone}`} className="leader-contact-phone">
                    <Phone size={16} />
                    <span>{leader.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
