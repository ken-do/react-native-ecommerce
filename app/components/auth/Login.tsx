import React from 'react';
import { Text, View } from 'react-native';

import LoginForm from './LoginForm';
import { IFormValues } from './LoginForm';

interface IProps {
    login(values: IFormValues): void
}

const Login: React.FC<IProps> = ({ login }) => {
    return (
        <View>
            <LoginForm onSubmit={login} />
        </View>
    )
}

export default Login;