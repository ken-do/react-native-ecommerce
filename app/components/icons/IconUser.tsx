import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

interface IProps {
    style?: object,
    onPress: () => void,
}


const IconUser: React.FC<IProps> = () => {
    return (
        <Icon style={styles.icon} name="account-circle" />
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        marginRight: 10,
    }
});


export default IconUser

