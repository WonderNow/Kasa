import { Link } from 'react-router-dom';
// import image from '../assets/about-hero-banner-image.png';

function HomeGallery() {
  return (
    <section className={'gallery-container'}>
      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>

      <Link to="/location/:id">
        <div className="location">
          <p>Titre de la location</p>
        </div>
      </Link>
    </section>
  );
}

export default HomeGallery;
