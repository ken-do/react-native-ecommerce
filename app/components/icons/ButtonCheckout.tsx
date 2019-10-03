import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface IButtonCheckoutProps {
    onPress: () => void
}

const ButtonCheckout: React.FC<IButtonCheckoutProps> = ({ onPress }) => {
    return (
        <TouchableHighlight style={styles.buttonCheckout} onPress={onPress}>
            <Text style={styles.buttonText}>Checkout</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonCheckout: {
        backgroundColor: '#0095ff',
        marginTop: 30,
        paddingBottom: 10,
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14
    }
});


export default ButtonCheckout;