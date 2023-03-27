import logo from '../assets/logo-footer.png';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      </Link>
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default footer;
