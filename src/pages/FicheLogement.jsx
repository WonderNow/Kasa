import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function FicheLogement() {
  return (
    <div className="fiche-logement-page">
      <Header />
      <main className="logement-main">
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default FicheLogement;
