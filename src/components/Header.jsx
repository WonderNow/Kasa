import logo from '../assets/logo-header.png';
import { NavLink } from 'react-router-dom';

function header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
