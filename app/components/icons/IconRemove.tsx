import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconRemove: React.FC = () => {
    return (
        <View style={styles.container}>
            <Icon name="remove-circle" style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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

export default IconRemove;
