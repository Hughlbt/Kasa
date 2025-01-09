import { Link } from 'react-router-dom';
import './NotFound.scss';
const Notfound = () => {
    return (
      <div className='notfound'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <nav>
            <Link to="/home">Retourner sur la page d'accueil</Link>
        </nav>
      </div>
    );
  };
  
  export default Notfound;