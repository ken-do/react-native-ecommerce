import { connect } from 'react-redux';
import actions from '../../actions';
import IconAdd from './IconAdd';
import withPress from '../HOC/withPress';
import { IProductProps } from '../product/ProductItem';

const mapDispatchToProps = (dispatch: (product: any) => void, { product }: IProductProps) => {
    return {
        onPress: () => dispatch(actions.addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(withPress(IconAdd));
