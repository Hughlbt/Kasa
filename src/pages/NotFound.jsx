import { Link } from 'react-router-dom';
import '../style/notfound.scss';
const Notfound = () => {
    return (
      <div className='notfound'>
        <h1>404</h1>
        <h2>
  Oups! La page <span className="break">que</span> vous demandez n'existe pas
        </h2>
        <nav>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </nav>
      </div>
    );
  };
  
  export default Notfound;