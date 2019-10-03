import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProductList from './product/ProductList';
import Cart from './cart/CartContainer';
import Checkout from './checkout/CheckoutContainer';
import IconCart from './icons/IconCartWithBadge';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';

const AppNavigator = createStackNavigator(
    {
        ProductList: {
            screen: ProductList,
            navigationOptions: {
                title: 'Kencommerce',
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                title: 'Cart',
            },
        },
        Checkout: {
            screen: Checkout,
            navigationOptions: {
                title: 'Checkout'
            }
        }
    },
    {
        initialRouteName: 'ProductList',
        defaultNavigationOptions: ({ navigation: { navigate } }) => {
            return {
                headerRight: <IconCart onPress={() => navigate('Cart')} style={styles.cartButton}/>,
                headerStyle: {
                    backgroundColor: '#9c4dcc',
                },
                headerTitleStyle: {
                    color: '#fff'
                },
                headerTintColor: '#fff'
            }
        }
    }
);

const styles = StyleSheet.create({
    cartButton: {
        position: 'relative',
        overflow: 'visible',
        paddingTop: 10,
    },
})


export default createAppContainer(AppNavigator);
