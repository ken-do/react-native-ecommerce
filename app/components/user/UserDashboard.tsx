import React from 'react';
import { View, Text, Button } from 'react-native';

interface IProps {
    logout(): void
}

const UserDashboard: React.FC<IProps> = ({ logout }) => {
    return (
        <View>
            <Text>User Details</Text>
            <Button onPress={() => console.log('check orders')} title={'your orders'}/>
            <Button onPress={() => console.log('updating profile')} title={'update profile'}/>
            <Button onPress={logout} title={'logout'}/>
        </View>
    )
}

export default UserDashboard;