import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { FaLeaf } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="logo">
          <FaLeaf style={{ marginRight: "0.3rem" }} />
          Centre for Nutritional Healthcare
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/health-coaching" className="nav-link">
            Health Coaching
          </Link>
          <Link to="/education" className="nav-link">
            Education
          </Link>
          <Link to="/campaign" className="nav-link">
            Campaign
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/research" className="nav-link">
            Research
          </Link>
          <Link to="/resource-center" className="nav-link">
            Resource Center
          </Link>
          <Link to="/support" className="nav-link">
            Support
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
