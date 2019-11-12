import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Login from './Login';
import actions from '../../actions';
import { IFormValues } from './LoginForm';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (values: IFormValues) => dispatch(actions.login(values))
    }
}

export default connect(null, mapDispatchToProps)(Login);