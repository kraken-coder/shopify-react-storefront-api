import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
// import Product from './Product';

import './App.css';

const App = ({ client }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Home {...props} client={client} />}
          />
          {/* <Route
            path='/product/:productId'
            render={(props) => <Product {...props} client={client} />}
          /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
