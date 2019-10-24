import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

interface IProps {
    length?: number;
    [propName: string]: any;
}

const withBadge = (WrappedComponent: React.FC | React.ClassicComponentClass) => ( { length , ...passThroughProps}: IProps ) => {
    return (
        <View>
            <WrappedComponent {...passThroughProps} />
            <Badge style={styles.badge}>{length || 0}</Badge>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: 0,
        top: -5,
        zIndex: 10,
    },
});

export default withBadge;