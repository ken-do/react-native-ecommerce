import { connect } from 'react-redux';
import actions from '../../actions';
import IconAdd from './IconAdd';
import withPress from '../HOC/withPress';

const mapDispatchToProps = (dispatch, { product }) => {
    return {
        onPress: () => dispatch(actions.addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(withPress(IconAdd));
