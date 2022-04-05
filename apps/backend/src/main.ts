import express from 'express';
import morgan from 'morgan';
import { env } from './configs/env.config';
import Logger from './utils/logger.util';

const app = express();
const logger = new Logger('Express');

app.use(
  morgan('dev', {
    stream: {
      write: (msg) => {
        logger.debug(msg.trim());
      },
    },
  })
);

app.get('/', (_req, res) => {
  res.send({
    name: 'Berlin Brandenburg eSports e.V.',
  });
});

app.listen(env.PORT, () => {
  logger.info(`🚀 Started on http://localhost:${env.PORT}/api`);
});
