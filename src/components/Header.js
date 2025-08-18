import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Le Petit Citron</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Réservations</Link></li>
          <li><Link to="/order-online">Commander</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;