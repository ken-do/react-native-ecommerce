import { handleActions } from 'redux-actions';
import actions from './actions';
import AsyncStore from './ultilities/AsyncStore';
import { CART_ITEMS } from './constants/StoreKeys';

const { login, addToCart, addAllToCart, removeFromCart, clearCart } = actions;

const defaultState = {
    authenticated: false,
    cart: [],
    checkedout: false,
};


const reducer = handleActions(
    {
        [login]: state => {
            return { ...state, authenticated: true }
        },
        [addAllToCart] : (state, { payload: products }) => {
            return { ...state, cart: products}
        },
        [addToCart]: (state, { payload: product} ) => {
            const cart = state.cart.slice();
            const item = cart.find(p => p.id === product.id);
            if (item) {
                const index = cart.indexOf(item);
                let amount = cart[index].amount;
                cart[index].amount = amount + 1;
            } else {
                cart.push({...product, amount : 1});
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart}
        },
        [removeFromCart]: (state, { payload: id }) => {
            let cart = state.cart.slice();
            const item = cart.find(p => p.id === id);
            if (item) {
                const index = cart.indexOf(item);
                if (item.amount > 1) {
                    let amount = cart[index].amount;
                    cart[index].amount = amount - 1;
                } else if (item.amount == 1) {
                    cart = cart.filter(p => p.id !== item.id)
                }
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart}
        },
        [clearCart]: state => {
            AsyncStore.set(CART_ITEMS, []);
            return { ...state, cart : defaultState.cart.slice()}
        },
    },
    defaultState
);

export default reducer;