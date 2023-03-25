import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <section>
        <p>Ceci est le contenu de la page "Accueil".</p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
