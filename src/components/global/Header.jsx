import { Link, useLocation } from "react-router-dom";
import "../../style/header.scss";

const Header = () => {
  const location = useLocation(); 

  return (
    <header className="main-header">
      <img src="/pictures/logo/header.png" alt="logo" />
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
