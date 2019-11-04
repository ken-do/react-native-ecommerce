import axios from 'axios';
import env from 'react-native-config'

import ICartItem from '../interfaces/CartItem';
import ICartItemDetails from '../interfaces/CartItemDetails';

export default class CartItem implements ICartItem {
    private _id: string;
    private _amount: number;
    private _details: ICartItemDetails;

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

    public toTuple() {
        return {[this._id] : this._amount} ;
    }

    get details() {
        return this._details;
    }

    public async fetchDetails() {
        const product = await axios.get(env.ROOT_API + '/products/' + this._id);
        this._details = product.data;
        return this._details;
    }
}