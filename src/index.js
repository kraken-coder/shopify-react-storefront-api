import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy';
import AppState from './state/AppState';

const client = Client.buildClient({
  domain: 'revolution-labs-test.myshopify.com/',
  storefrontAccessToken: 'd3b22639287a54acc354496b2eaf66db',
});

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App client={client} />
    </AppState>
  </React.StrictMode>,
  document.getElementById('root')
);
