import UserDashboard from './UserDashboard';
import { Dispatch } from 'redux';
import actions from '../../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(UserDashboard);