import ICartItem from './CartItem';
import IProduct from './Product';
import IAuthenticatedUser from './AuthenticatedUser';
import IOrder from './Order';

export default interface State {
    loggedin: boolean,
    user: IAuthenticatedUser,
    cart: ICartItem[],
    checkedout: boolean,
    products: IProduct[],
    orders: IOrder[]
}
