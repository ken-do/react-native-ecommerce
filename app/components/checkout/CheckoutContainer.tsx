import { connect } from 'react-redux';
import actions from '../../actions';
import Checkout from './Checkout';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(null, mapDispatchToProps)(Checkout);