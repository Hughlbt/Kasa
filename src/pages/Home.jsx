import { Link } from 'react-router-dom'; 
import Banner from '../components/Banner_home';
import Card from '../components/Card';
import './Home.scss';

const Home = () => {
  const cardData = [
    { id: 1, title: 'Titre de la location', image: 'image1.jpg', description: 'Description for card 1' },
    { id: 2, title: 'Titre de la location', image: 'image2.jpg', description: 'Description for card 2' },
    { id: 3, title: 'Titre de la location', image: 'image3.jpg', description: 'Description for card 3' },
    { id: 4, title: 'Titre de la location', image: 'image4.jpg', description: 'Description for card 4' },
    { id: 5, title: 'Titre de la location', image: 'image5.jpg', description: 'Description for card 5' },
    { id: 6, title: 'Titre de la location', image: 'image6.jpg', description: 'Description for card 6' },
  ];

  return (
    <div>
      <Banner 
        title="Chez vous, partout et ailleurs" 
        backgroundImage="/pictures/Banner_home.png" 
      />
      <div className="card-list">
        {cardData.map((item) => (
          <Link key={item.id} to={`/location/${item.id}`} className="card-link"> 
            <Card 
              title={item.title} 
              image={item.image} 
              description={item.description} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;