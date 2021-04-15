import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import ContactEmail from './ContactEmail';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Content} />
        <Route exact path="/mail/:id" component={ContactEmail} />
        <Footer />
      </Router>
    </div>
  );
}
//test

export default App;