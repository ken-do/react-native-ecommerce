import { connect } from 'react-redux';
import IconCart from './IconCart';
import withPress from '../HOC/withPress';
import withBadge from '../HOC/withBadge';
import { IProduct } from '../product/data';

const mapStateToProps = (state: { cart: IProduct[] } ) => {
    return {
        length: state.cart.reduce((length : number, item: IProduct) : number => length + item.amount, 0)
    }
}

export default connect(mapStateToProps)(withPress(withBadge(IconCart)));