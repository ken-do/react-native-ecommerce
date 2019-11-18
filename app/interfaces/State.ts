import CartItem from './CartItem';
import Product from './Product';
import IAuthenticatedUser from './AuthenticatedUser';

export default interface State {
    loggedin: boolean,
    user: IAuthenticatedUser,
    cart: CartItem[],
    checkedout: boolean,
    products: Product[],
}
