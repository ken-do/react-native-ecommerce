import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProductList from './product/ProductListContainer';
import Cart from './cart/CartContainer';
import Checkout from './checkout/CheckoutContainer';
import IconCart from './icons/IconCartWithBadge';
import IconUser from './icons/IconUserWithPress';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import Login from './auth/LoginContainer';

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
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        }
    },
    {
        initialRouteName: 'ProductList',
        defaultNavigationOptions: ({ navigation: { navigate } }) => {
            return {
                headerRight: <View style={styles.headerButtons}>
                                <IconCart onPress={() => navigate('Cart')} style={styles.cartButton}/>
                                <IconUser onPress={() => navigate('Login')} style={styles.cartButton}/>
                            </View>,
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
    headerButtons: {
        flex: 1,
        flexDirection: 'row',
    }
})


export default createAppContainer(AppNavigator);
