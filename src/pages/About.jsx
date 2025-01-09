 import Banner from '../components/Banner_about';
import './About.scss';
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <>
    <div>
       <Banner
        backgroundImage="/pictures/Banner_about.png" />
    </div>
    <div>
    <Collapse title="Fiabilité">
    </Collapse>
    <Collapse title="Respect">
    </Collapse>
    <Collapse title="Service">
    </Collapse>
    <Collapse title="Sécurité">
    </Collapse>
   
    </div>
    </>
  );
};

export default About;
