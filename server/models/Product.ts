import Model from './Model';
import IProduct from '../interfaces/Product';

export default class Product extends Model<IProduct> {
    constructor() {
        const databaseURL = 'D:\\Projects\\Kencommerce\\server\\products.json';
        super(databaseURL);
    }
}