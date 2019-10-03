import { connect } from 'react-redux';
import actions from '../../actions';
import ButtonRemove from './IconRemove';
import withPress from '../HOC/withPress';

const mapDispatchToProps = (dispatch, { product }) => {
    return {
        onPress: () => dispatch(actions.removeFromCart(product.id))
    }
}

export default connect(null, mapDispatchToProps)(withPress(ButtonRemove));
