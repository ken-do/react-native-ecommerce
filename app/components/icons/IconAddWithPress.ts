import { connect } from 'react-redux';
import actions from '../../actions';
import IconAdd from './IconAdd';
import withPress from '../HOC/withPress';
import { Dispatch } from 'redux';

interface IProps {
    readonly id: string
}

const mapDispatchToProps = (dispatch: Dispatch, { id }: IProps) => {

    return {
        onPress: () => dispatch(actions.addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(withPress(IconAdd));
