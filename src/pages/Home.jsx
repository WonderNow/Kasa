import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import HomeGallery from '../components/HomeGallery';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroBanner className="home-banner" />
        <HomeGallery />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
