// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/new-arrivals">
                New Arrivals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                onClick={handleDropdownClick}
                aria-expanded={showDropdown}
              >
                About
              </a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mission">
                      Our Mission
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.whatsapp.com/">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;





