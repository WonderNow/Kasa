import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <HeroBanner className="home-banner" />
      <Footer />
    </div>
  );
}

export default Home;
