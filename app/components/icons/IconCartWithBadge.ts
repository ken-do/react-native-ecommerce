import { connect } from 'react-redux';

import ICartItem from '../../interfaces/CartItem';

import IconCart from './IconCart';
import withPress from '../HOC/withPress';
import withBadge from '../HOC/withBadge';

const mapStateToProps = (state: { cart: ICartItem[] } ) => {
    return {
        length: state.cart.reduce((length : number, item: ICartItem) : number => {
            const amount = item.amount;
            return length + amount
        }, 0)
    }
}

export default connect(mapStateToProps)(withPress(withBadge(IconCart)));