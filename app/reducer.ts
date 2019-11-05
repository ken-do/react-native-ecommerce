import { handleActions } from 'redux-actions';
import actions from './actions';
import AsyncStore from './ultilities/AsyncStore';
import { CART_ITEMS } from './constants/StoreKeys';
import IState from './interfaces/State';
import CartItem from './ultilities/CartItem';

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

        [addAllToCart] : (state: IState, { payload: items }) => {
            const cartItems = items.map((item) => {
                const cartItem = new CartItem(item._id, item._amount);
                cartItem.details = item._details;
                return cartItem;
            });
            return { ...state, cart: cartItems}
        },

        [addToCart]: (state: IState, { payload: id} ) => {
            const cart = state.cart.slice();
            const item = cart && cart.find(it => it.id === id);
            if (item) {
                const amount = item.amount;
                item.amount = amount + 1;
            } else {
                cart.push(new CartItem(id, 1));
            }
            AsyncStore.set(CART_ITEMS, cart);
            return { ...state, cart}
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