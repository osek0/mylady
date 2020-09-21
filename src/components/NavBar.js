import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="icon">
              <i className="fas fa-home"></i>
            </div>
            <p className="link-text">Start</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"> 
            <div className="icon">
            <i className="fas fa-users"></i>
            </div>
            <p className="link-text">O nas</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="icon">
              <i className="fas fa-camera"></i>
            </div>
            <p className="link-text">Galeria</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="icon">
              <i className="fas fa-address-card"></i>
            </div>
            <p className="link-text">Kontakt</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="icon">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <p className="link-text">Płatności</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <p className="link-text">FAQ</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;