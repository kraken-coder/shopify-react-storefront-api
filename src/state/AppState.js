import React from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Client from 'shopify-buy';

import {
  GET_CLIENT,
  SET_LOADING,
  GET_PROD,
  ADD_PROD,
  CREATE_CHECKOUT,
  ADD_CHECKOUT,
} from './TYPES';

// //////////////////////////////

const AppState = (props) => {
  const initialState = {
    products: [],
    shop: [],
    loading: false,
    product: [],
    prodImage: [],
    cart: {},
    cartIns: '',
  };
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  ///////////////////////////////

  const { products, prodImage, shop, loading, product, cartIns, cart } = state;

  const client = Client.buildClient({
    domain: 'revolution-labs-test.myshopify.com/',
    storefrontAccessToken: 'd3b22639287a54acc354496b2eaf66db',
  });

  React.useEffect(() => {
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

  const getProduct = async (handle) => {
    try {
      setLoading();

      const product = await client.product.fetchByHandle(handle);

      const { images, variants, title, description } = product;
      console.log(description);
      const image = images[0].src;
      const prod = { images, variants, title, description };
      dispatch({ type: GET_PROD, payload: { image, product: prod } });
    } catch (error) {
      console.log(error);
    }
  };

  const checkoutInst = async () => {
    const res = await client.checkout.create();
    dispatch({ type: CREATE_CHECKOUT, payload: res });
  };

  const selectedProd = (prod, title) => {
    const { price, id } = prod;

    const payload = { title, price, id };

    dispatch({ type: ADD_PROD, payload });
  };

  const updateCart = async () => {
    const lineItemsToAdd = [
      {
        variantId: cart.id,
        quantity: 5,
      },
    ];

    const res = await client.checkout.addLineItems(cartIns.id, lineItemsToAdd);
    dispatch({ type: CREATE_CHECKOUT, payload: res });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  const value = {
    products,
    prodImage,
    product,
    shop,
    cart,
    cartIns,
    loading,
    getProduct,
    selectedProd,
    checkoutInst,
    updateCart,
  };

  ///////////////

  return (
    <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
  );
};

export default AppState;
