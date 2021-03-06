import { connect } from 'react-redux';
import actions from '../../actions';
import Checkout from './Checkout';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
        submitForm: () => dispatch(actions.checkout())
    }
}

export default connect(null, mapDispatchToProps)(Checkout);