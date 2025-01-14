import Banner from '../components/Banner';
import '../style/about.scss';
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <>
    <div className='about-page'>
       <Banner
       title=""
       backgroundImage="/pictures/banner-about.png" />
    <div className='collapse-container'>
    <Collapse title="Fiabilité">
    <p>Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
    </Collapse>
    <Collapse title="Respect">
    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoires ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
    </Collapse>
    <Collapse title="Service">
    <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avbec nos hôtes ou nos locataires, 
      soit empreinte de respect et de bienveillance.</p>
    </Collapse>
    <Collapse title="Sécurité">
    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critéres de sécurité établis par nos services.
      En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
      Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
    </Collapse>
    </div>
    </div>
    </>
  );
};

export default About;
