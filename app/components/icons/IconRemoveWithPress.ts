import { connect } from 'react-redux';
import actions from '../../actions';
import ButtonRemove from './IconRemove';
import withPress from '../HOC/withPress';
import { Dispatch } from 'redux';

interface IProps {
    readonly id: string
}

const mapDispatchToProps = (dispatch: Dispatch, { id } : IProps) => {
    return {
        onPress: () => dispatch(actions.removeFromCart(id))
    }
}

export default connect(null, mapDispatchToProps)(withPress(ButtonRemove));
