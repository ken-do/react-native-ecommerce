import axios from 'axios';
import env from 'react-native-config'

import ICartItem from '../interfaces/CartItem';
import IProduct from '../interfaces/Product';

export default class CartItem implements ICartItem {
    private _id: string;
    private _amount: number;
    private _details: IProduct;

    constructor(k: string, v: number) {
        this._id = k;
        this._amount = v;
    }

    get id(): string {
        return this._id;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get details() {
        return this._details;
    }

    set details(product: IProduct) {
        this._details = product;
    }

    public async fetchDetails() {
        const product = await axios.get(env.ROOT_API + '/products/' + this._id);
        this._details = product.data;
        return this._details;
    }
}