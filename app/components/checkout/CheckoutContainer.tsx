import { connect } from 'react-redux';
import actions from '../../actions';
import Checkout from './Checkout';

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(null, mapDispatchToProps)(Checkout);