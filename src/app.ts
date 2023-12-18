import express from 'express';
import cors from 'cors';
import { default as helmet } from 'helmet';
import logger from 'morgan';

const port = process.env.PORT ?? 8080;
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

if (!isProduction) {
  app.use(logger('dev'));
}

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello, World</h1>');
});

const server = app.listen(port, () =>
  console.log(`Server is Listening on Port ${port}...`),
);

export { app, server };
