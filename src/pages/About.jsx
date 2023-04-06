import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import Collapse from '../components/Collapse';
const aboutData = require('../assets/about-data.json');

function About() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroBanner className="about-banner" />
        {/* Créer autant de Collapse qu'il y a d'éléments dans le tableau aboutData grâce à la méthode map(). Chaque Collapse reçoit en props le titre et le contenu de l'élément du tableau aboutData correspondant. */}
        <div className="collapse-wrapper">
          {aboutData.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default About;
