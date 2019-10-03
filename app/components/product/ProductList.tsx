import React from 'react';
import products from './data';
import ProductItem from './ProductItem';
import { FlatList } from 'react-native';

const ProductList:React.FC = () => {
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => <ProductItem product={item} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}



export default ProductList;