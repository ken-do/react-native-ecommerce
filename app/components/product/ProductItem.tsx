import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import env from 'react-native-config';

import IProduct from '../../interfaces/Product';

import IconAddWithPress from '../icons/IconAddWithPress';

export interface IProps {
    readonly product: IProduct
} 

const ProductItem:React.FC<IProps> = ({ product }) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <View style={styles.heading}>
                    <Title>{product.title}</Title>
                    <Paragraph style={styles.price}>${product.price}</Paragraph>
                </View>
                <View style={styles.cover}>
                    <Card.Cover style={styles.img} source={{ uri: env.SERVER_URI + product.img }} />
                    <IconAddWithPress id={product._id} buttonStyle={styles.buttonAdd} />
                </View>
                <Paragraph style={styles.desc} >{product.desc}</Paragraph>
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
    },
    heading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cover: {
        position: 'relative',
        zIndex: 1,
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
})
export default ProductItem;