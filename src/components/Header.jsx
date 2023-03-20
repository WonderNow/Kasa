import logo from '../assets/logo.png';
import '../styles/Header.scss';

function header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className='kasa-logo' />
    </header>

  )
}

export default header;