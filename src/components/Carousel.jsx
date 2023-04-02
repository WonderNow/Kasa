import React, { useState } from 'react';
import arrow from '../assets/arrow-carousel.png';

function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pictures = props.image;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  if (pictures.length > 1) {
    const currentImageNumber = currentSlide + 1;
    const totalImages = pictures.length;

    return (
      <section className="carousel">
        <div className="slider">
          <div className="keys">
            <div className="left-arrow" onClick={prevSlide}>
              <img src={arrow} alt="Skip" />
            </div>
            <div className="right-arrow" onClick={nextSlide}>
              <img src={arrow} alt="Skip" />
            </div>
          </div>
          <div className="slides">
            {pictures.map((image, index) => (
              <div
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                key={index}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="image-number">
            {currentImageNumber}/{totalImages}
          </div>
        </div>
      </section>
    );
  } else if (pictures.length === 1) {
    return (
      <section className="carousel">
        <div className="slider">
          <div className="slides">
            <div
              className={`slide active`}
              key={0}
              style={{ backgroundImage: `url(${pictures[0]})` }}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return null; // Si la liste de `pictures` est vide, on ne renvoie rien
  }
}

export default Carousel;
