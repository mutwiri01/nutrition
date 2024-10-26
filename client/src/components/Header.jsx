import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaLeaf } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <FaLeaf style={{ marginRight: '0.5rem' }} />
          Center for Nutritional Healthcare
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/health-coaching" className="nav-link" onClick={closeMenu}>
            Health Coaching
          </Link>
          <Link to="/education" className="nav-link" onClick={closeMenu}>
            Education
          </Link>
          <Link to="/campaign" className="nav-link" onClick={closeMenu}>
            Campaign
          </Link>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/research" className="nav-link" onClick={closeMenu}>
            Research
          </Link>
          <Link to="/resource-center" className="nav-link" onClick={closeMenu}>
            Resource Center
          </Link>
          <Link to="/support" className="nav-link" onClick={closeMenu}>
            Support
          </Link>
          <Link to="/login" className="nav-link" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
