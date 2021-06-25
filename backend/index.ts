import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';

const app = express();

const PORT = 8080;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
