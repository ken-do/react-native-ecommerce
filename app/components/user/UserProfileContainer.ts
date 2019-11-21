import { connect } from 'react-redux';

import IState from '../../interfaces/State';

import UserProfile from './UserProfile';

const mapStateToProps = (state: IState) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserProfile);