import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Details from '../components/Details.jsx';
import logements from '../assets/logements.json';

function FicheLogement() {
  // Extraction de l'identifiant du logement à partir des paramètres de l'URL en utilisant le Hook useParams()
  const { id } = useParams();
  // Récupération du Hook useNavigate pour rediriger vers la page 404 si le logement n'existe pas
  const navigate = useNavigate();
  // Définition d'un state pour stocker le logement sélectionné
  const [selectedLogement, setselectedLogement] = useState();

  useEffect(() => {
    // Recherche du logement correspondant à l'identifiant dans le fichier JSON
    const selected = logements.find((logement) => logement.id === id);
    // Mise à jour du state avec le logement sélectionné
    setselectedLogement(selected);

    // Si aucun logement ne correspond à l'identifiant, redirection vers la page 404
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
