import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Galery from './Galery';
import Contact from './Contact';
import './styles/Content.css';

const Content = () => {
  return (
    <div className="content">
        <Home />
        <AboutUs />
        <Galery />
        <Contact />
    </div>
  );
  //Add payments component
}

export default Content;