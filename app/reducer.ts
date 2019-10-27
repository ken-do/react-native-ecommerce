import { handleActions } from 'redux-actions';
import actions from './actions';
import AsyncStore from './ultilities/AsyncStore';
import { CART_ITEMS } from './constants/StoreKeys';
import IState from './interfaces/State';

const { login, addToCart, addAllToCart, removeFromCart, clearCart, fetchProductsSuccess } = actions;

const defaultState: IState = {
    authenticated: false,
    cart: [],
    checkedout: false,
    products: [],
};


const reducer = handleActions(
    {
        [fetchProductsSuccess] : (state: IState, {payload : products}) => {
            return {...state, products};
        },

        [login]: (state: IState) => {
            return { ...state, authenticated: true }
        },

        [addAllToCart] : (state: IState, { payload: products }) => {
            return { ...state, cart: products}
        },

        [addToCart]: (state: IState, { payload: product} ) => {
            const cart = state.cart.slice();
            const item = cart.find(p => p._id === product._id);
            if (item) {
                const index = cart.indexOf(item);
                const amount = cart[index].amount;
                cart[index].amount = amount + 1;
            } else {
                cart.push({...product, amount : 1});
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart}
        },

        [removeFromCart]: (state: IState, { payload: id }) => {
            let cart = state.cart.slice();
            const item = cart.find(p => p._id === id);
            if (item) {
                const index = cart.indexOf(item);
                if (item.amount > 1) {
                    const amount = cart[index].amount;
                    cart[index].amount = amount - 1;
                } else if (item.amount === 1) {
                    cart = cart.filter(p => p._id !== item._id)
                }
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart}
        },

        [clearCart]: (state: IState) => {
            AsyncStore.set(CART_ITEMS, []);
            return { ...state, cart : defaultState.cart.slice()}
        },
    },
    
    defaultState
);

export default reducer;