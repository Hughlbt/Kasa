import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/logement.scss';
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [annonce, setAnnonce] = useState(null);
  const [starSize, setStarSize] = useState(36); 

  useEffect(() => {
    const handleResize = () => {
      setStarSize(window.innerWidth <= 767.98 ? 18 : 36);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('/annonces.json')
      .then((response) => response.json())
      .then((data) => {
        const foundAnnonce = data.find((item) => item.id === id);
        if (foundAnnonce) {
          setAnnonce(foundAnnonce);
        } else {
          navigate('/error');
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération de l\'annonce:', error));
  }, [id, navigate]);

  if (!annonce) return <p>Chargement...</p>;

  return (
    <div className="logement-page">
      <Slideshow pictures={annonce.pictures} />

      <div className="logement-header">
        <div>
          <h1>{annonce.title}</h1>
          <p>{annonce.location}</p>
          <div className="tags">
            {annonce.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-info">
          <div className="host-details">
            <span className="host-name">
              {annonce.host.name.split(" ")[0]}<br />{annonce.host.name.split(" ")[1]}
            </span>
            <img src={annonce.host.picture} alt={annonce.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                src={index < annonce.rating ? "/pictures/picto/star-filled.svg" : "/pictures/picto/star.svg"}
                alt={index < annonce.rating ? "Étoile remplie" : "Étoile vide"}
                width={starSize}  
                height={starSize} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <Collapse title="Description">
          <p>{annonce.description}</p>
        </Collapse>
        <Collapse title="Équipements">
           <ul> {annonce.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))} </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logement;
