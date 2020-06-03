import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
              <i class="fas fa-home"></i>
            </div>
            <p className="link-text">Start</p>
          </li>
        </a>
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
            <i class="fas fa-users"></i>
            </div>
            <p className="link-text">O nas</p>
          </li>
        </a>
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
              <i class="fas fa-camera"></i>
            </div>
            <p className="link-text">Galeria</p>
          </li>
        </a>
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
              <i class="fas fa-address-card"></i>
            </div>
            <p className="link-text">Kontakt</p>
          </li>
        </a>
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <p className="link-text">Płatności</p>
          </li>
        </a>
        <a href="#" className="nav-link">
          <li className="nav-item">
            <div className="icon">
              <i class="fas fa-question-circle"></i>
            </div>
            <p className="link-text">FAQ</p>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;