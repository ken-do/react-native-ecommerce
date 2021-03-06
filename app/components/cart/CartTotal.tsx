import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

import ICartItem from '../../interfaces/CartItem';

import CartTotalItem from './CartTotalItem';

interface IProps {
    items: ICartItem[],
    
}
const CartTotal:React.FC<IProps> = ({ items }) => {
    const total = items && items.reduce((acc, item) => { 
        return item.details ? acc + (item.amount * item.details.price): 0;
    }, 0);
        
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={items}
                renderItem={item => <CartTotalItem {...item} />}
                keyExtractor={item => item.id}
            />
            <View style={styles.sectionTotal}>
                <Text style={styles.title}>Total:</Text>
                <Text style={styles.amount}>${total}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },
    sectionTotal : {
      flex: 1,
      flexDirection: 'row'  
    },
    title: {
        fontSize: 20,
        flex: 2
    },
    amount: {
        fontSize: 20,
        flex: 1
    }
});

export default CartTotal