import { handleActions } from 'redux-actions';

import IState from './interfaces/State';

import CartItem from './ultilities/CartItem';
import actions from './actions';
import AsyncStore from './ultilities/AsyncStore';
import { CART_ITEMS } from './constants/StoreKeys';

const { loginSuccess, loginFailure, logout, addToCart, addAllToCart, removeFromCart, clearCart, fetchProductsSuccess, fetchOrdersSuccess } = actions;

const defaultState: IState = {
    loggedin: false,
    user: null,
    cart: [],
    checkedout: false,
    products: [],
    orders: []
};


const reducer = handleActions(
    {
        [fetchProductsSuccess]: (state: IState, { payload: products }) => {
            return { ...state, products };
        },

        [fetchOrdersSuccess]: (state: IState, { payload: orders }) => {
            return { ...state, orders };
        },

        [loginSuccess]: (state: IState, { payload: user }) => {
            return { ...state, loggedin: true, user }
        },

        [loginFailure]: (state: IState) => {
            return { ...state, loggedin: false, user: null }
        },

        [logout]: (state: IState) => {
            return { ...state, loggedin: false, user: null }
        },

        [addAllToCart]: (state: IState, { payload: items }) => {
            const cartItems = items.map((item) => {
                const cartItem = new CartItem(item._id, item._amount);
                cartItem.details = item._details;
                return cartItem;
            });
            return { ...state, cart: cartItems }
        },

        [addToCart]: (state: IState, { payload: id }) => {
            const cart = state.cart.slice();
            const item = cart && cart.find(it => it.id === id);
            if (item) {
                const amount = item.amount;
                item.amount = amount + 1;
            } else {
                cart.push(new CartItem(id, 1));
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart }
        },

        [removeFromCart]: (state: IState, { payload: id }) => {
            let cart = state.cart.slice();
            const item = cart.find(it => it.id === id);
            if (item) {
                if (item.amount > 1) {
                    const amount = item.amount;
                    item.amount = amount - 1;
                } else if (item.amount === 1) {
                    cart = cart.filter(it => it.id !== id)
                }
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart }
        },

        [clearCart]: (state: IState) => {
            AsyncStore.set(CART_ITEMS, []);
            return { ...state, cart: defaultState.cart.slice() }
        },
    },

    defaultState
);

export default reducer;