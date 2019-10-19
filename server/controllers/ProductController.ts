import CRUDController from './CRUDController';
import Product from '../interfaces/Product';

export default class ProductController extends CRUDController<Product> {
    constructor() {
        const databaseURL = 'D:\\Projects\\Kencommerce\\server\\products.json';
        super(databaseURL);
    }
}