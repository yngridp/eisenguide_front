import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navbar/Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout realizado!");
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Eisenguide</h1>
        <img src="https://i.imgur.com/nVaFpoE.png" alt="Imagem ao lado do logo" className="navbar-logo-image" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Painel</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
