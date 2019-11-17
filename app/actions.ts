import { createActions } from 'redux-actions';
import axios from 'axios';
import env from 'react-native-config'
import Product from './interfaces/Product';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import IState from './interfaces/State';
import ILoginForm from './interfaces/LoginForm';

const actions = createActions({
  FETCH_PRODUCTS_SUCCESS: (products: Product[]) => (products),
  LOGIN_SUCCESS: (user = {}) => (user),
  LOGIN_FAILURE: () => { return },
  LOGOUT: () => { return },
  ADD_ALL_TO_CART: (products: Product[] = []) => (products),
  ADD_TO_CART: (id: string) => (id),
  REMOVE_FROM_CART: (id: number) => (id),
  UPDATE_CART: (id: number) => (id),
  CLEAR_CART: () => { return },
});

export const fetchProducts: () => (ThunkAction<void, IState, null, null>) = () => {
  return (dispatch: Dispatch) => {
    axios.get(env.ROOT_API + '/products')
    .then(res => {
      dispatch(actions.fetchProductsSuccess(res.data))
    })
    .catch(err => console.log(err))
  }
}

export const login: (data: ILoginForm) => (ThunkAction<void, IState, null, null>) = (data) => {
  return (dispatch: Dispatch) => {
    axios.post(env.ROOT_API + '/login', data)
    .then(res => {
      dispatch(actions.loginSuccess(res.data))
    })
    .catch(res => {
      dispatch(actions.loginFailure(res.data))
    })
  }
}

export default actions