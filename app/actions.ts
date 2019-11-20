import { createActions } from 'redux-actions';

import IProduct from './interfaces/Product';
import IOrder from './interfaces/Order';

const actions = createActions({
  FETCH_PRODUCTS_SUCCESS: (products: IProduct[]) => (products),
  FETCH_ORDERS_SUCCESS: (orders: IOrder[]) => (orders),
  LOGIN_SUCCESS: (user = {}) => (user),
  LOGIN_FAILURE: () => { return },
  LOGOUT: () => { return },
  ADD_ALL_TO_CART: (products: IProduct[] = []) => (products),
  ADD_TO_CART: (id: string) => (id),
  REMOVE_FROM_CART: (id: number) => (id),
  UPDATE_CART: (id: number) => (id),
  CLEAR_CART: () => { return },
});


export default actions;