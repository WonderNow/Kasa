import { Link } from 'react-router-dom';

function error404() {
  return (
    <div className="error404-container">
      <div className="error404-message">
        <p className="only-404">404</p>
        <p className="text-under-404">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div className="link-to-home-container">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}

export default error404;
