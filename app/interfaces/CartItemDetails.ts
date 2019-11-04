import Product from './Product';

export default interface CartItemDetails extends Product {
    amount: number
}