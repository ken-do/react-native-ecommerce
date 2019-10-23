import { connect } from 'react-redux';
import actions from '../../actions';
import IconAdd from './IconAdd';
import withPress from '../HOC/withPress';
import IProduct from '../../interfaces/Product';
import { Dispatch } from 'redux';

interface IProps {
    readonly product: IProduct
}

const mapDispatchToProps = (dispatch: Dispatch, { product }: IProps) => {
    return {
        onPress: () => dispatch(actions.addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(withPress(IconAdd));
