import * as express from 'express';
import * as path from 'path';
import {Server as HttpServer} from 'http';
import {Product, Review, getProducts, getProductById, getReviewsByProductId} from './model';

// HTTP API

const app = express();

app.use('/node_modules', express.static(path.join('../client/node_modules')));
app.use('/',             express.static(path.join('../client/dist')));

app.get('/products', (req, res) => {
  res.json(getProducts(req.query));
});

app.get('/products/:id', (req, res) => {
  res.json(getProductById(parseInt(req.params.id)));
});

app.get('/products/:id/reviews', (req, res) => {
  res.json(getReviewsByProductId(parseInt(req.params.id)));
});


const httpServer: HttpServer = app.listen(8000, 'localhost', () => {
  const {address, port} = httpServer.address();
  console.log('Listening on %s %s', address, port);
});
