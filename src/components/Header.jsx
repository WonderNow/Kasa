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
          <li className="underline-1">
            <NavLink to="/" activeClassName="active">Accueil</NavLink>
          </li>
          <li className="underline-2">
            <NavLink to="/about" activeClassName="active">À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
