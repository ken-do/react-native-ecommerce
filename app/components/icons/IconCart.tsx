import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const IconCart: React.FC = () => {
    return (
        <Icon style={styles.icon} name="shopping-cart" />
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        marginRight: 10,
    }
});


export default IconCart

