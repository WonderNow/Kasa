import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse() {
  const [isActive, setIsActive] = useState(false); // On définit un état pour stocker l'état actif

  const toggleCollapse = () => {
    setIsActive(!isActive); // On inverse la valeur de l'état actif lorsque l'utilisateur clique sur l'élément "collapse-container__head"
  }

  return (
    <div className="collapse-container">
      <div className={`collapse-container__head ${isActive ? 'active' : ''}`} onClick={toggleCollapse}>
        <p className="collapse-name">Fiabilité</p>
        <img src={arrow} alt="Afficher le contenu" />
      </div>
      <div className={`collapse-container__content ${isActive ? 'active' : ''}`}>
        <p className="collapse-text-content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  );
}

export default Collapse;
