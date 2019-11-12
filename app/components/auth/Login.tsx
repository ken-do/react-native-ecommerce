import React from 'react';
import { Text, View } from 'react-native';

import LoginForm from './LoginForm';
import ILoginForm from '../../interfaces/LoginForm';

interface IProps {
    login(values: ILoginForm): void
}

const Login: React.FC<IProps> = ({ login }) => {
    return (
        <View>
            <LoginForm onSubmit={login} />
        </View>
    )
}

export default Login;