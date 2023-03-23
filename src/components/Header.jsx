import logo from '../assets/logo-header.png';

function header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo de Kasa" className='kasa-logo' />
        <ul>
          <li className='underline-1'><a href='#'>Accueil</a></li>
          <li className='underline-2'><a href='#'>À Propos</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default header;