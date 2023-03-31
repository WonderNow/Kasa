import arrow from '../assets/arrow.png';

function collapse() {
  return (
    <div className="collapse-container">
      <label htmlFor="collapse-container__head">
        <div className="collapse-container__head">
          <p className="collapse-name">Fiabilité</p>
          <img src={arrow} alt="Afficher le contenu" />
        </div>
      </label>
      <div className="collapse-container__content">
        <p className="collapse-text-content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  );
}

export default collapse;
