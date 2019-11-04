import React from 'react';
import { ScrollView, Alert} from 'react-native';
import CartTotal from '../cart/CartTotal';
import CheckoutForm from './CheckoutForm';
import ICartItemDetails from '../../interfaces/CartItemDetails';

interface INavigation {
    state:  { params : { items : ICartItemDetails[] }};
    navigate(screen: string) : void;
}

interface IProps {
    navigation: INavigation;
    clearCart() : void;
} 

const Checkout: React.FC<IProps> = ({ clearCart, navigation: { navigate, state : { params: { items } }}}) => {
    const submitForm = () => new Promise(resolve => {
        setTimeout(resolve, 400);
    })

    const onSubmit = () => {
        submitForm()
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