import express from 'express';
import productsRouter from "./routers/products";
import cors from 'cors';
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);

const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log(`server started on ${port} port!`);
  });
};

void run();