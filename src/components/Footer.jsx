import logo from '../assets/logo-footer.png';

function footer() {
  return (
    <footer className="footer">
      <a href="#">
        <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      </a>
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default footer;
