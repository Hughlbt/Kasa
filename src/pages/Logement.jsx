import '../style/logement.scss';
import Collapse from "../components/Collapse";
const Logement = () => {
    return (
        
      <div className='logement-page'>
        <div className='collapse-banner'>
        <Collapse title="Description">
        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.
            Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
            Vous êtes à 1 station de la gare de l'est (7minutes à pied).
        </p>
        </Collapse>
        <Collapse title="Equipements">
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Fer à repasser</li>
        <li>Sèche-cheveux</li>
        <li>Cintres</li>
        </Collapse>
        </div>
        </div>
      
      );
    };
  
  export default Logement;