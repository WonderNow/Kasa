import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroBanner className="home-banner" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
