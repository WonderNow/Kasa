import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse(props) {
  // Définit un état pour stocker l'état actif du collapse
  const [isActive, setIsActive] = useState(false); // On définit un état pour stocker l'état actif

  // On inverse la valeur de l'état actif lorsque l'utilisateur clique sur l'élément
  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="collapse-container">
      {/* Utilisation d'un opérateur ternaire pour ajouter la classe "active" si l'état isActive est vrai. Lorsque l'utilisateur clique sur cette div, la fonction toggleCollapse est appelée pour modifier l'état isActive. */}
      <div
        className={`collapse-container__head ${isActive ? 'active' : ''}`}
        onClick={toggleCollapse}
      >
        <p className="collapse-name">{props.title}</p>
        <img src={arrow} alt="Afficher le contenu" />
      </div>
      {/* Utilisation d'un opérateur ternaire pour ajouter la classe "active" si l'état isActive est vrai. */}
      <div
        className={`collapse-container__content ${isActive ? 'active' : ''}`}
      >
        <p className="collapse-text-content">{props.content}</p>
      </div>
    </div>
  );
}

export default Collapse;
