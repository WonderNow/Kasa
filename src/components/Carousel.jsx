import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer l'ID dans l'URL
import arrow from '../assets/arrow-carousel.png';
import logements from '../assets/logements.json';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { id } = useParams(); // Obtention de l'ID grâce à l'URL actuelle
  const logement = logements.find((l) => l.id === id); // Recherche du logement correspondant à l'ID
  console.log(logement); // Affichage des données attendues dans la console du navigateur

  const pictures = logement.pictures; // Récupération des images du logement

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
      <div className="carousel">
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
      </div>
    );
  } else if (pictures.length === 1) {
    return (
      <div className="carousel">
        <div className="slider">
          <div className="slides">
            <div
              className={`slide active`}
              key={0}
              style={{ backgroundImage: `url(${pictures[0]})` }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Si la liste de `pictures` est vide, on ne renvoie rien
  }
}

export default Carousel;
