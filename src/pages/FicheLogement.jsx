import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Details from '../components/Details.jsx';

function FicheLogement() {
  return (
    <div className="fiche-logement-page">
      <Header />
      <main className="logement-main">
        <Carousel />
        <Details />
      </main>
      <Footer />
    </div>
  );
}

export default FicheLogement;
