import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about">
      <div className="fact">
        <img className="about-photo" src="./photos/polaroid1.png" />
        <div className="about-desc">
          <h2 className="fact-header">Hello world!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, neque in placerat tempor, lectus ligula molestie lacus, eu pretium dolor metus id sapien. Nullam rhoncus orci augue. Phasellus eros tortor, egestas eget maximus ac, aliquam et orci. Fusce nec pretium leo. Duis eu tempus turpis, sed condimentum enim. Vestibulum cursus scelerisque neque, in viverra nisi vulputate id. Nam tincidunt posuere tellus, vitae scelerisque tortor ullamcorper in. Etiam scelerisque metus porta, tristique felis et, euismod ante. Maecenas ornare enim in dictum venenatis.</p>
        </div>
      </div>
      <div className="fact">

        <div className="about-desc">
          <h2 className="fact-header">Hello world!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, neque in placerat tempor, lectus ligula molestie lacus, eu pretium dolor metus id sapien. Nullam rhoncus orci augue. Phasellus eros tortor, egestas eget maximus ac, aliquam et orci. Fusce nec pretium leo. Duis eu tempus turpis, sed condimentum enim. Vestibulum cursus scelerisque neque, in viverra nisi vulputate id. Nam tincidunt posuere tellus, vitae scelerisque tortor ullamcorper in. Etiam scelerisque metus porta, tristique felis et, euismod ante. Maecenas ornare enim in dictum venenatis.</p>
        </div>
        <img className="about-photo" src="./photos/polaroid2.png" />
      </div>
      <div className="fact">
        <img className="about-photo" src="./photos/polaroid3.png" />
        <div className="about-desc">
          <h2 className="fact-header">Hello world!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, neque in placerat tempor, lectus ligula molestie lacus, eu pretium dolor metus id sapien. Nullam rhoncus orci augue. Phasellus eros tortor, egestas eget maximus ac, aliquam et orci. Fusce nec pretium leo. Duis eu tempus turpis, sed condimentum enim. Vestibulum cursus scelerisque neque, in viverra nisi vulputate id. Nam tincidunt posuere tellus, vitae scelerisque tortor ullamcorper in. Etiam scelerisque metus porta, tristique felis et, euismod ante. Maecenas ornare enim in dictum venenatis.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;