import'../footer/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
  <a>
  <Link to="/security" className="footer-link">2024 - Segurança e Privacidade</Link>
</a>
  <a href="mailto:support@eisenguide.com" className="footer-link">support@eisenguide.com</a>
</footer>

  );
};

export default Footer;
