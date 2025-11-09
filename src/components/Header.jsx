import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container header-inner">
        <a className="brand" href="#accueil">
          <div className="brand-logo">
            <img src="/logos/cql-logo.png" alt="CQL Interactive Logo" />
          </div>
          CQL Interactive
        </a>
        <nav className={`site-nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#accueil" onClick={() => setIsNavOpen(false)}>Accueil</a>
          <a href="#projets" onClick={() => setIsNavOpen(false)}>Nos Projets</a>
          <a href="#equipe" onClick={() => setIsNavOpen(false)}>Notre Équipe</a>
          <a href="#partenaires" onClick={() => setIsNavOpen(false)}>Nos Partenaires</a>
          <a href="#contact" onClick={() => setIsNavOpen(false)}>Nous contacter</a>
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
