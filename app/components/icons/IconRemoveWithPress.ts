import { connect } from 'react-redux';
import actions from '../../actions';
import ButtonRemove from './IconRemove';
import withPress from '../HOC/withPress';
import IProduct from '../../interfaces/Product';
import { Dispatch } from 'redux';

interface IProps {
    readonly product: IProduct
}

const mapDispatchToProps = (dispatch: Dispatch, { product } : IProps) => {
    return {
        onPress: () => dispatch(actions.removeFromCart(product.id))
    }
}

export default connect(null, mapDispatchToProps)(withPress(ButtonRemove));
