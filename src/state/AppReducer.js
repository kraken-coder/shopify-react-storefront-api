import { GET_CLIENT, SET_LOADING, GET_PROD } from './TYPES';
export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      const { products, shop } = action.payload;
      return {
        ...state,
        products,
        shop,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_PROD:
      return {
        ...state,
        product: action.payload.product,
        prodImage: action.payload.image,
        loading: false,
      };

    default:
      return state;
  }
};
