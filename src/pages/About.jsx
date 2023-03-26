import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

function About() {
  return (
    <div className="about-page">
      <Header />
      <HeroBanner className="about-banner" />
      <Footer />
    </div>
  );
}

export default About;
