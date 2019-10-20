import * as express from 'express';
import * as path from 'path';
import * as serveStatic from 'serve-static';
import ProductController from './server/controllers/ProductController';

const app = express();

app.use(serveStatic(path.join(__dirname, 'server', 'static')));

app.get('/api/products', ProductController.index);

app.listen(5000);