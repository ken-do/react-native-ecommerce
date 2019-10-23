import { connect } from 'react-redux';
import Cart from './Cart';
import actions from '../../actions';
import AsyncStore from '../../ultilities/AsyncStore';
import { CART_ITEMS } from '../../constants/StoreKeys';
import ICartItem from '../../interfaces/CartItem';
import { Dispatch } from 'redux';

const addAllToCart = (dispatch: Dispatch) => (items : ICartItem[]) => dispatch(actions.addAllToCart(items));

const checkStore = ({ items } : {items : ICartItem[] }) => async () => {
    if (!(items && items.length)) {
        const cartItems = await AsyncStore.get(CART_ITEMS);
        if (cartItems && cartItems.length) {
            this.addAllToCart(cartItems);
        }
    }
}

const mapStateToProps = (state: { cart: ICartItem[]; }) => {
    return {
        items: state.cart
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: object) => {
    return {
        addAllToCart: addAllToCart(dispatch),
        checkAsyncStore: checkStore.bind(this, ownProps)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);