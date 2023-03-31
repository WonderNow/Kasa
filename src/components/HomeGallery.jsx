import { Link } from 'react-router-dom';
import logements from '../assets/logements.json';

function HomeGallery() {
  const links = logements.map((logement) => (
    <Link to={`/logement/${logement.id}`} key={logement.id}>
      <div className="location">
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
      </div>
    </Link>
  ));

  return <section className={'gallery-container'}>{links}</section>;
}

export default HomeGallery;
