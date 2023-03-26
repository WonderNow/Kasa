import logo from '../assets/logo-footer.png';
import { NavLink } from 'react-router-dom';

function footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      </NavLink>
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default footer;
