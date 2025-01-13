import { useState } from 'react';
import PropTypes from 'prop-types';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      {pictures.length > 1 && (
        <div className="slideshow-controls">
          <button className="prev" onClick={prevSlide}>
            <img src="/pictures/picto/left-arrow.svg" alt="Previous" />
          </button>
          <button className="next" onClick={nextSlide}>
            <img src="/pictures/picto/right-arrow.svg" alt="Next" />
          </button>
        </div>
      )}
      <div className="slide-number-container">
        <span className="slide-number">{currentIndex + 1} / {pictures.length}</span>
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
