import React from 'react';

export const PhotoCard = props => {

  return (
    <div className="photo-card">
      <div className="photo">
        <img className="photos-item" src={props.url} />
        <div className="contact-links">
          <p className="title">Zapytaj o produkt</p>
          <a href="#">
            <div id="mail" className="contact-link-item">
              <i class="far fa-envelope"></i>
            </div>
          </a>
          <a href="#">
            <div id="messenger" className="contact-link-item">
              <i class="fab fa-facebook-messenger" aria-hidden="true"></i>
            </div>
          </a>
          <p className="fb-link">Zobacz post na <a href="#">facebooku</a></p>
        </div>
      </div>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
}