import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';

import './App.css';

const App = ({ client }) => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product/:handle' component={Product} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
