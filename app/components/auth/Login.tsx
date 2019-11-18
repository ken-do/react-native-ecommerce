import React from 'react';
import { Text, View } from 'react-native';

import LoginForm from './LoginForm';
import UserDashboard from '../user/UserDashboardContainer';

import ILoginForm from '../../interfaces/LoginForm';

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