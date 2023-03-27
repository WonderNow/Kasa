import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <HeroBanner className="about-banner" />
      </main>
      <Footer />
    </div>
  );
}

export default About;
