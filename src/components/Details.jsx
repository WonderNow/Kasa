import Collapse from './Collapse';
import colorfulStar from '../assets/star-colorful.png';
import grayStar from '../assets/star-gray.png';

// Fonction qui renvoie un tableau d'images d'étoiles en couleur ou grises
function getStars(rating) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    // Utilisation de l'opérateur ternaire pour choisir l'image en fonction de la note
    const starImg = i <= rating ? colorfulStar : grayStar;
    // Utilisation de l'opérateur ternaire pour choisir le texte alternatif en fonction de la note
    const altText = i <= rating ? `${i} étoiles sur 5` : `${i} étoile sur 5`;
    stars.push(<img key={i} src={starImg} alt={altText} />);
  }
  return stars;
}

function Details(props) {
  return (
    <section className="details">
      <div className="details__head">
        <div className="details__head--left">
          <h2>{props.title}</h2>
          <p>{props.location}</p>
          <div className="tags">
            {props.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="details__head--right">
          <div className="author-infos">
            <p className="author_name">{props.hostName}</p>
            <div
              className="author__picture"
              style={{ backgroundImage: `url(${props.hostPic})` }}
            ></div>
          </div>
          <div className="stars-rating">{getStars(props.rating)}</div>
        </div>
      </div>
      <div className="details__bottom">
        <Collapse
          key={props.id}
          title="Description"
          content={props.description}
        />
        <Collapse
          className="list"
          key={props.id}
          title="Équipements"
          content={props.equipments.map((eq, index) => (
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
