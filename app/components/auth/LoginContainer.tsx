import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import Login from './Login';
import { login } from '../../actions';
import ILoginForm from '../../interfaces/LoginForm';

const mapDispatchToProps = (dispatch: ThunkDispatch<object, void, AnyAction>) => {
    return {
        login: (data: ILoginForm) => dispatch(login(data))
    }
}

export default connect(null, mapDispatchToProps)(Login);