import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface IProps {
    onPress: () => void,
    buttonStyle?: Object,
    [propName: string]: any;
}

const withPress = (WrappedComponent : any) => ({ onPress, buttonStyle={}, ...passThroughProps } : IProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]} >
            <WrappedComponent {...passThroughProps}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'stretch',
    },
});

export default withPress;