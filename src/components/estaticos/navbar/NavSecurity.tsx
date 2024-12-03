import React from 'react';
import { Link } from 'react-router-dom';
import './NavSecurity.css';

const NavSecurity: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EisenGuide</div>
      <ul className="navbar-links">
        <li>
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSecurity;
