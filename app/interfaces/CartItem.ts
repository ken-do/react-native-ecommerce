import Product from './Product';

export default interface CartItem extends Product {
    amount: number
}
