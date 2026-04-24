import { Link } from 'react-router-dom';

export default function Footer() {
  const handleLegalClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-content">
          <small>&copy; 2025-2026 CQL Interactive — Tous droits réservés.</small>
          <nav className="footer-nav">
            <Link 
              to="/mentions-legales" 
              className="footer-link"
              onClick={handleLegalClick}
            >
              Mentions Légales
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
