import * as express from 'express';
import Product from '../models/Product';

export default class ProductController {

    static create(req: express.Request, res: express.Response): void {
        res.send('');
    }
    
    static read(req: express.Request, res: express.Response): void {
        res.send('');
    }

    static update(req: express.Request, res: express.Response): void {
        res.send('');
    }

    static remove(req: express.Request, res: express.Response): void {
        res.send('');
    }

    static index(req: express.Request, res: express.Response): void {
        const product = new Product;
        res.send(product.index());
    }
}