import { createActions } from 'redux-actions';
import axios from 'axios';
import env from 'react-native-config'
import Product from './interfaces/Product';

const actions = createActions({
  FETCH_PRODUCTS_SUCCESS: (products: Product[]) => (products),
  LOGIN: (userCreds = {}) => (userCreds),
  ADD_ALL_TO_CART: (products: Product[] = []) => (products),
  ADD_TO_CART: (product = {}) => (product),
  REMOVE_FROM_CART: (id: number) => (id),
  UPDATE_CART: (id: number) => (id),
  CLEAR_CART: () => {
    return {}
  },
});

export const fetchProducts = () => {
  return (dispatch: any) => {
    axios.get(env.ROOT_API + '/products')
    .then(res => {
      return dispatch(actions.fetchProductsSuccess(res.data))
    })
    .catch(err => console.log(err))
  }
}

export default actions