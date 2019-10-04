import { connect } from 'react-redux';
import actions from '../../actions';
import ButtonRemove from './IconRemove';
import withPress from '../HOC/withPress';
import { IProductProps } from '../product/ProductItem';

const mapDispatchToProps = (dispatch: (id: any) => void, { product } : IProductProps) => {
    return {
        onPress: () => dispatch(actions.removeFromCart(product.id))
    }
}

export default connect(null, mapDispatchToProps)(withPress(ButtonRemove));
