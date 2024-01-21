import {Router} from 'express';
const productsRouter = Router();

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

const products = [];

productsRouter.get('/', (req, res) => {
  res.send('Products list');
});

productsRouter.get('/:id', (req, res) => {
  res.send('A single product by id');
});

productsRouter.post('/', (req, res) => {
  res.send('Post product');

  const product: Product = {
    id: crypto.randomUUID(),
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };

  products.push(product);
});

export default productsRouter;