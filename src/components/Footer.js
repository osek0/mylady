import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="section">
        <h5 className="section-title">Kontakt</h5>
        <div className="icon-item">
          <i className="fas fa-phone"></i>
          <p className="footer-text">(+48) 505 178 174</p>
        </div>
        <div className="icon-item">
          <i className="fas fa-envelope"></i>
          <p className="footer-text">mylady.sklep@gmail.com</p>
        </div>
        <div className="icon-item">
          <i className="fab fa-facebook-messenger"></i>
          <p className="footer-text">@mylady.czestochowa</p>
        </div>
      </div>
      <div className="section">
        <h5 className="section-title">Tutaj nas znajdziesz</h5>
        <div className="icon-item">
          <i className="fab fa-facebook-square"></i>
          <p className="footer-text">Facebook</p>
        </div>
        <div className="icon-item">
          <i className="fab fa-instagram"></i>
          <p className="footer-text">Instagram</p>
        </div>
      </div>
      <div className="section">
        <h5 className="section-title">Przydatne linki</h5>
        <p className="footer-text">Regulamin</p>
        <p className="footer-text">Polityka prywatności</p>
        <p className="footer-text">FAQ</p>
        <p className="footer-text">Kontakt</p>
      </div>
      <div className="section">
        <h5 className="section-title">Newsletter</h5>
        <form className="newsletter">
          <label className="newsletter-label" for="newsletter">Bądź na bierząco z nowościami i otrzymuj infromacje o promocjach</label>
          <input className="newsletter-input" type="email" name="newsletter" placeholder="example@mail.com"></input>
          <button className="newsletter-button">Wyślij</button>
        </form>
      </div>
      <div className="copyright">© Oskar. All rights reserved.</div>
    </footer>
  );
}

export default Footer;