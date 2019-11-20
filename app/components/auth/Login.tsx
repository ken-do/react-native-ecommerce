import React from 'react';
import { View } from 'react-native';

import ILoginForm from '../../interfaces/LoginForm';

import LoginForm from './LoginForm';
import UserDashboard from '../user/UserDashboardContainer';

interface IProps {
    loggedin: boolean,
    login(values: ILoginForm): void
}

const Login: React.FC<IProps> = ({ login, loggedin }) => {
    return (
        <View>
            {!loggedin ?
                <LoginForm onSubmit={login} />
                :
                <UserDashboard />
            }
        </View>
    )
}

export default Login;