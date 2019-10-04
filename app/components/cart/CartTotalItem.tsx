import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ICartItem } from './CartItem';

interface IProps {
    item : ICartItem
}
const CartTotalItem:React.FC<IProps> = ({item : { title, id, price, amount }}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text>${price} x {amount}</Text>
            </View>
            <View style={styles.itemCost}>
                <Text>${price * amount}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    itemInfo: {
        flex: 2,
        flexDirection: 'column'
    },
    itemCost: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',

    }
})

export default CartTotalItem