import React from 'react';
import { ScrollView, Alert} from 'react-native';
import CartTotal from '../cart/CartTotal';
import CheckoutForm from './CheckoutForm';

const Checkout: React.FC = ({ clearCart, navigation: { navigate, state : { params: { items } }}}) => {
    
    const submitForm = (values) => new Promise(resolve => {
        setTimeout(resolve, 400);
    })

    const onSubmit = (values) => {
        submitForm(clearCart)
        .then(() => {
            Alert.alert('Thank you for your order');
            clearCart();
            navigate('ProductList');
        })
    }

    return (
        <ScrollView>
            <CartTotal items={items} />
            <CheckoutForm onSubmit={onSubmit} />
        </ScrollView>
    )
}

export default Checkout;