import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';
import sequelize from './models/sequelize';

const app = express();

const PORT = 8080;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);

(async () => {
  await sequelize.sync();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${PORT} 🚀`);
  });
})();
