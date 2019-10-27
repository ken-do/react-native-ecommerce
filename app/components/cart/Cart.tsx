import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import CartItem from './CartItem';

import CartTotal from './CartTotal';
import ButtonCheckout from '../icons/ButtonCheckout';
import ICartItem from '../../interfaces/CartItem';

interface IProps {
    items: ICartItem[];
    navigation: { navigate(d: string, params: { items: ICartItem[] }): void };
    checkAsyncStore(): void
}

const Cart: React.FC<IProps> = (props) => {

    const { items, navigation: { navigate } } = props;

    useEffect(() => {
        props.checkAsyncStore();
    });

    const checkout = () => {
        navigate('Checkout', { items });
    }

    return (
        (items && items.length) ?
            <ScrollView>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <CartItem item={item} />}
                    keyExtractor={item => item._id}
                />
                <View style={styles.sectionTotal}>
                    <CartTotal items={items} />
                    <ButtonCheckout onPress={checkout} />
                </View>
            </ScrollView>
            :
            <View style={styles.cartEmpty}>
                <Text>Your cart is empty...</Text>
            </View>
    )
};

const styles = StyleSheet.create({
    cartEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTotal: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
    },
})

export default Cart;