import { connect } from 'react-redux';
import Cart from './Cart';
import actions from '../../actions';
import AsyncStore from '../../ultilities/AsyncStore';
import { CART_ITEMS } from '../../constants/StoreKeys';


const _addAllToCart = dispatch => (products) => dispatch(actions.addAllToCart(products));

const _checkStore = ({ items }) => async () => {
    if (!(items && items.length)) {
        const items = await AsyncStore.get(CART_ITEMS);
        if (items && items.length) {
            this.addAllToCart(items);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addAllToCart: _addAllToCart(dispatch),
        checkAsyncStore: _checkStore.bind(this, ownProps)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);