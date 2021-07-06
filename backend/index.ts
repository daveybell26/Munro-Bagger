import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import router from './router';
import sequelize from './models/sequelize';

const app = express();

const PORT = 8080;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-l8augku5.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://www.baghikes-api.com',
  issuer: 'https://dev-l8augku5.eu.auth0.com/',
  algorithms: ['RS256'],
});

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(jwtCheck);
app.use(router);

(async () => {
  await sequelize.sync();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${PORT} 🚀`);
  });
})();
