import React, { useState } from 'react';
import arrow from '../assets/arrow-carousel.png';

function Carousel(props) {
  // Le Hook d'état useState permet de créer un état local et de déclencher une mise à jour du composant lorsqu'il change.
  const [currentSlide, setCurrentSlide] = useState(0);
  const pictures = props.image;

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  // Affichage du composant seulement s'il y a plus d'une image
  if (pictures.length > 1) {
    // Variables pour afficher le numéro d'image actuel et le nombre total d'images
    const currentImageNumber = currentSlide + 1;
    const totalImages = pictures.length;

    // Retourne le JSX pour le carousel
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
  }
  // Si seulement une image est fournie
  // Retourne le JSX pour afficher la seule image
  else if (pictures.length === 1) {
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
  }
  // Si la liste de `pictures` est vide, on ne renvoie rien
  else {
    return null; // Si la liste de `pictures` est vide, on ne renvoie rien
  }
}

export default Carousel;
