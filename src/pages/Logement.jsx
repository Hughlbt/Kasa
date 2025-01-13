import '../style/logement.scss';
import Collapse from "../components/Collapse";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Logement = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    fetch('/annonces.json')
      .then((response) => response.json())
      .then((data) => {
        const foundAnnonce = data.find((item) => item.id === id);
        setAnnonce(foundAnnonce);
      })
      .catch((error) => console.error('Erreur lors de la récupération de l\'annonce:', error));
  }, [id]);

  if (!annonce) return <p>Chargement...</p>;

  return (
    <div className="logement-page">
      <img src={annonce.cover} alt={annonce.title} />
      <h1>{annonce.title}</h1>
      <p>{annonce.location}</p>
      <tag>{annonce.tags}</tag>
      <rate>{annonce.rating}</rate>
      <name>{annonce.host.name}</name>
      <img src={annonce.host.picture} alt={annonce.host.name} />
      <div className="collapse-container">
      <Collapse title="Équipements">
        <ul>
          {annonce.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </Collapse>
      <Collapse title="Description">
      <p>{annonce.description}</p>
      </Collapse>
      </div>
    </div>
  );
};

export default Logement;
