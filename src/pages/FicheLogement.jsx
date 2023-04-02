import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Details from '../components/Details.jsx';
import logements from '../assets/logements.json';

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedLogement, setselectedLogement] = useState();

  useEffect(() => {
    const selected = logements.find((logement) => logement.id === id);
    setselectedLogement(selected);

    if (!selected) {
      navigate('/page-not-found');
    }
  }, [id, navigate]);

  return (
    <div className="fiche-logement-page">
      <Header />
      {selectedLogement ? (
        <main className="logement-main">
          <Carousel image={selectedLogement.pictures} />
          <Details
            title={selectedLogement.title}
            location={selectedLogement.location}
            rating={selectedLogement.rating}
            hostName={selectedLogement.host.name}
            hostPic={selectedLogement.host.picture}
            description={selectedLogement.description}
            equipments={selectedLogement.equipments}
            tags={selectedLogement.tags}
          />
        </main>
      ) : null}
      <Footer />
    </div>
  );
}

export default FicheLogement;
