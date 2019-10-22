import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { FlatList } from 'react-native';
import IProduct from '../../interfaces/Product';

interface IProps {
    products: IProduct[],
    fetchProducts: () => void
}

const ProductList:React.FC<IProps> = ({ products, fetchProducts }) => {
    
    useEffect(() => {
        if (!products.length) {
            fetchProducts();
        }
    });

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => <ProductItem product={item} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}



export default ProductList;