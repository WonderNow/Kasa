import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

function About() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroBanner className="about-banner" />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default About;
