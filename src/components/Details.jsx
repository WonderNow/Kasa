import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer l'ID dans l'URL
import logements from '../assets/logements.json';
import Collapse from './Collapse';
import colorfulStar from '../assets/star-colorful.png';
import grayStar from '../assets/star-gray.png';

function getStars(rating) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    const starImg = i <= rating ? colorfulStar : grayStar;
    const altText = i <= rating ? `${i} étoiles sur 5` : `${i} étoile sur 5`;
    stars.push(<img key={i} src={starImg} alt={altText} />);
  }
  return stars;
}

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
          <div className="author-infos">
            <p className="author_name">{logement.host.name}</p>
            <div
              className="author__picture"
              style={{ backgroundImage: `url(${logement.host.picture})` }}
            ></div>
          </div>
          <div className="stars-rating">{getStars(logement.rating)}</div>
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
