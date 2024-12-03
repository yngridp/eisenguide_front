import'../footer/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
  <a href="/security" className="footer-link">
  <Link to="/security">2024 - Segurança e Privacidade</Link>
</a>
  <a href="mailto:support@eisenguide.com" className="footer-link">support@eisenguide.com</a>
</footer>

  );
};

export default Footer;
