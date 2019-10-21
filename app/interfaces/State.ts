import CartItem from './CartItem';
import Product from './Product';

export default interface State {
    authenticated: boolean,
    cart: CartItem[],
    checkedout: boolean,
    products: Product[],
}
