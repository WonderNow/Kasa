import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import HomeGallery from '../components/HomeGallery';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroBanner className="home-banner" />
        <HomeGallery />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
