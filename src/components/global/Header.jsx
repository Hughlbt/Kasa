import { Link } from 'react-router-dom';
import '../../style/header.scss';
const Header = () => {
  return (
    <header className="main-header">
      <img src="/pictures/logo/header.png" alt="logo" />
      <nav>
        <Link to="/home">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;