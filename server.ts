import * as express from 'express';
import ProductController from './server/controllers/ProductController';

const app = express();

app.get('/api/products', (req, res) => {
    const productController = new ProductController;
    const data = productController.index();
    res.send(data);
});

app.listen(5000);