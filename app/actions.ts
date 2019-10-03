import { createActions } from 'redux-actions';

export default { login, addToCart, addAllToCart, removeFromCart, clearCart } = createActions({
  LOGIN: (userCreds = {}) => (userCreds),
  ADD_ALL_TO_CART: (products = []) => (products),
  ADD_TO_CART: (product = {}) => (product),
  REMOVE_FROM_CART: (id) => (id),
  UPDATE_CART: (id) => (id),
  CLEAR_CART: () => {
    return {}
  },
});