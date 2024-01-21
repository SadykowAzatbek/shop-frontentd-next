import express from 'express';
import productsRouter from "./routers/products";

const app = express();
const port = 8000;

app.use(express.json());

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`server started on ${port} port!`);
});