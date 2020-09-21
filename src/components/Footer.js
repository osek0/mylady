import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="section">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-facebook-messenger"></i>
      </div>
      <div className="section">
        <i className="fab fa-instagram"></i>
      </div>
      <div className="section">
        <i className="fab fa-instagram"></i>
        <i className="fas fa-phone"></i>
      </div>
    </footer>
  );
}

export default Footer;