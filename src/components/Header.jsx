import logo from '../assets/logo-header.png';

function header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo de Kasa" className='kasa-logo' />
        <ul>
          <li><a href='#'>Accueil</a></li>
          <li><a href='#'>À Propos</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default header;