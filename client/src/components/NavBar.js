import React from 'react';
import {NavItem} from './NavItem';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem title="Start" icon="fas fa-home" link="#" />
        <NavItem title="O nas" icon="fas fa-users" link="#" />
        <NavItem title="Galeria" icon="fas fa-camera" link="#" />
        <NavItem title="Kontakt" icon="fas fa-address-card" link="#" />
        <NavItem title="Płatności" icon="fas fa-hand-holding-usd" link="#" />
        <NavItem title="FAQ" icon="fas fa-question-circle" link="#" />
      </ul>
    </nav>
  );
}

export default NavBar;