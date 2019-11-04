import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import ButtonAddWithPress from '../icons/IconAddWithPress';
import ButtonRemoveWithPress from '../icons/IconRemoveWithPress';
import ICartItem from '../../interfaces/CartItem';
import env from 'react-native-config';

interface IProps {
    item: ICartItem
}

const CartItem: React.FC<IProps> = ({ item }) => {    
    return (
        <Card style={styles.container}>
            <Card.Content  style={styles.content}>
                <View style={styles.cover}>
                    <Card.Cover style={styles.img} source={{ uri: env.SERVER_URI + item.details.img }} resizeMode="contain" />
                </View>
                <View style={styles.details}>
                    <View>
                        <Title>{item.details.title}</Title>
                        <Paragraph style={styles.price}>${item.details.price} x {item.amount}</Paragraph>
                    </View>
                    <Paragraph style={styles.desc} >{item.details.desc}</Paragraph>
                    <ButtonRemoveWithPress id={item.details._id} buttonStyle={styles.buttonRemove} />
                    <ButtonAddWithPress id={item.details._id} buttonStyle={styles.buttonAdd} />
                </View>
            </Card.Content>
        </Card>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    cover: {
        position: 'relative',
        flex: 2
    },

    details : {
        flex: 3,
        paddingLeft: 15,
        paddingRight: 15
    },
    img: {
        borderBottomColor: '#adadad',
        borderBottomWidth: 1,
    },
    desc: {
        marginTop: 15,
    },
    price: {
        color: '#9c4dcc'
    },
    buttonAdd: {
        position: 'absolute',
        right: 0,
        bottom: -10,
    },
    buttonRemove: {
        position: 'absolute',
        right: 35,
        bottom: -10,
    }
})
export default CartItem;