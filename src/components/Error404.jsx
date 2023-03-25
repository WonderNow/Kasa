import { NavLink } from 'react-router-dom';

function error404() {
  return (
    <div className="error404-container">
      <div className="error404-message">
        <p class="only-404">404</p>
        <p class="text-under-404">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div class="link-to-home-container">
        <NavLink to="/" activeClassName="active">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </div>
  );
}

export default error404;
