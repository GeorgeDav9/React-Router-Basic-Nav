import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </div>
  )
};

export default App;
