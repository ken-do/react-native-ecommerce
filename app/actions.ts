import { createActions } from 'redux-actions';
import axios from 'axios';

const actions = createActions({
  FETCH_PRODUCTS_SUCCESS: (products) => (products),
  LOGIN: (userCreds = {}) => (userCreds),
  ADD_ALL_TO_CART: (products = []) => (products),
  ADD_TO_CART: (product = {}) => (product),
  REMOVE_FROM_CART: (id) => (id),
  UPDATE_CART: (id) => (id),
  CLEAR_CART: () => {
    return {}
  },
});

export const fetchProducts = () => {
  return (dispatch: any) => {
    axios.get('http://localhost:5000/api/products')
    .then(res => {
      dispatch(actions.fetchProductsSuccess(res))
    })
    .catch(err => console.log('Error'))
  }
}

export default actions