import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../style/home.scss';

const Home = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch('/annonces.json')
      .then((response) => response.json())
      .then((data) => setAnnonces(data))
      .catch((error) => console.error('Erreur de chargement des annonces:', error));
  }, []);

  return (
    <div>
      <Banner 
        title="Chez vous, partout et ailleurs" 
        backgroundImage="/pictures/banner_home.png" 
      />
      <div className="card-list">
        {annonces.map((item) => (
          <Link key={item.id} to={`/logement/${item.id}`} className="card-link"> 
            <Card 
              title={item.title}
              image={item.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;