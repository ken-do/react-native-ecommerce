import axios from 'axios';
import env from 'react-native-config';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

import IState from './interfaces/State';
import ILoginForm from './interfaces/LoginForm';

import actions from './actions';

export const fetchProducts: () => (ThunkAction<void, IState, null, null>) = () => {
    return (dispatch: Dispatch) => {
      axios.get(env.ROOT_API + '/products')
      .then(res => {
        dispatch(actions.fetchProductsSuccess(res.data))
      })
      .catch(err => console.log(err))
    }
  }
  
  export const fetchOrders: (userId: string) => (ThunkAction<void, IState, null, null>) = (userId: string) => {
    return (dispatch: Dispatch) => {
      axios.get(env.ROOT_API + '/orders/' + userId)
      .then(res => {
        dispatch(actions.fetchOrdersSuccess(res.data))
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