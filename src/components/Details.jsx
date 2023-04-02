import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer l'ID dans l'URL
import logements from '../assets/logements.json';
import Collapse from './Collapse';

function Details() {
  const { id } = useParams(); // Obtention de l'ID grâce à l'URL actuelle
  const logement = logements.find((l) => l.id === id); // Recherche du logement correspondant à l'ID
  console.log(logement.host.picture);
  return (
    <section className="details">
      <div className="details__head">
        <div className="details__head--left">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="details__head--right">
          <div className="right-top">
            <p className="author_name">{logement.host.name}</p>
            <div
              className="author__picture"
              style={{ backgroundImage: `url(${logement.host.picture})` }}
            ></div>
          </div>
          <div className="right-bottom">★★★★☆</div>
        </div>
      </div>
      <div className="details__bottom">
        <Collapse
          key={logement.id}
          title="Description"
          content={logement.description}
        />
        <Collapse
          className="list"
          key={logement.id}
          title="Équipements"
          content={logement.equipments.map((eq, index) => (
            <span key={index}>
              {eq}
              <br />
            </span>
          ))}
        />
      </div>
    </section>
  );
}

export default Details;
