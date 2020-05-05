import React from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Client from 'shopify-buy';

import { GET_CLIENT, SET_LOADING } from './TYPES';

const AppState = (props) => {
  const initialState = {
    products: [],
    shop: [],
    loading: false,
  };
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  ///////////////////////////////
  React.useEffect(() => {
    const client = Client.buildClient({
      domain: 'revolution-labs-test.myshopify.com/',
      storefrontAccessToken: 'd3b22639287a54acc354496b2eaf66db',
    });
    getClient(client);
  }, []);

  const getClient = async (clt) => {
    setLoading();
    const prod = await clt.product.fetchAll();
    const shop = await clt.shop.fetchInfo();
    const data = { products: prod, shop: shop };
    dispatch({
      type: GET_CLIENT,
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { products, shop, loading } = state;
  const value = { products, shop, loading };

  ///////////////

  return (
    <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
  );
};

export default AppState;
