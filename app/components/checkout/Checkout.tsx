import React from 'react';
import { ScrollView, Alert } from 'react-native';
import axios from 'axios';
import env from 'react-native-config';

import ICartItem from '../../interfaces/CartItem';
import IUser from '../../interfaces/User';

import CartTotal from '../cart/CartTotal';
import CheckoutForm from './CheckoutForm';

interface INavigation {
    state: { params: { items: ICartItem[] } };
    navigate(screen: string): void;
}

interface IProps {
    navigation: INavigation;
    clearCart(): void;
}

const Checkout: React.FC<IProps> = ({ clearCart, navigation: { navigate, state: { params: { items } } } }) => {

    const submitForm = (userInfo: IUser) => new Promise((resolve, reject) => {
        axios.post(env.ROOT_API + '/checkout', {...userInfo, items})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => reject(err))
    })

    const onSubmit = (userInfo: IUser) => {
        submitForm(userInfo)
            .then(({ message }) => {
                Alert.alert(message);
                clearCart();
                navigate('ProductList');
            })
            .catch(err => Alert.alert(err));
    }

    return (
        <ScrollView>
            <CartTotal items={items} />
            <CheckoutForm onSubmit={onSubmit} />
        </ScrollView>
    )
}

export default Checkout;