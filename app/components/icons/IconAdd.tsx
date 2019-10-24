import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
    style: object,
    onPress: () => void,
}

const IconAdd: React.FC<IProps> = () => {
    return (
        <View style={styles.iconContainer}>
            <Icon name="add" style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#9c4dcc',
    },
    icon: {
        color: '#fff',
        fontSize: 30,
    }
});

export default IconAdd;
