import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ICartItem from '../../interfaces/CartItem';

import Cart from './Cart';
import actions from '../../actions';
import AsyncStore from '../../ultilities/AsyncStore';
import { CART_ITEMS } from '../../constants/StoreKeys';

const checkStore = async (dispatch: Dispatch) => {
    const cartItems = await AsyncStore.get(CART_ITEMS);
    if (cartItems && cartItems.length) {
        dispatch(actions.addAllToCart(cartItems));
    }
}

const mapStateToProps = (state: { cart: ICartItem[]; }) => {
    return {
        items: state.cart
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        checkAsyncStore: () => checkStore(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);