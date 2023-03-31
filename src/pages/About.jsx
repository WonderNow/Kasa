import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import Collapse from '../components/Collapse';

function About() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroBanner className="about-banner" />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default About;
