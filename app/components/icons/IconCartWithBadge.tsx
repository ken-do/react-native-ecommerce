import { connect } from 'react-redux';
import IconCart from './IconCart';
import withPress from '../HOC/withPress';
import withBadge from '../HOC/withBadge';

const mapStateToProps = (state) => {
    return {
        length: state.cart.reduce((length, item) => length + item.amount, 0)
    }
}

export default connect(mapStateToProps)(withPress(withBadge(IconCart)));