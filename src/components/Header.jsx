import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash) => {
    setIsNavOpen(false);
    
    if (location.pathname === '/') {
      // On est déjà sur la page d'accueil, scroll vers l'élément
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // On n'est pas sur la page d'accueil, retour à l'accueil avec scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.header
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => { setIsNavOpen(false); window.scrollTo(0, 0); }}>
          <div className="brand-logo">
            <img src="/logos/cql-logo.png" alt="CQL Interactive Logo" />
          </div>
          CQL Interactive
        </Link>
        <nav className={`site-nav ${isNavOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavClick('accueil')} className="nav-btn">Accueil</button>
          <button onClick={() => handleNavClick('projets')} className="nav-btn">Nos Projets</button>
          <button onClick={() => handleNavClick('equipe')} className="nav-btn">Notre Équipe</button>
          <button onClick={() => handleNavClick('partenaires')} className="nav-btn">Nos Partenaires</button>
          <button onClick={() => handleNavClick('contact')} className="nav-btn">Nous contacter</button>
        </nav>
        <button
          id="navToggle"
          aria-label="Basculer navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? '✕' : '☰'}
        </button>
      </div>
    </motion.header>
  );
}
