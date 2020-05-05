import { GET_CLIENT, SET_LOADING } from './TYPES';
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

    default:
      return state;
  }
};
