import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import corsOptions from './configs/cors.config';
import { env } from './configs/env.config';
import sessionConfig from './configs/session.config';
import router from './controllers';
import { errorHandler, notFound } from './middlewares/error.middleware';
import Logger from './utils/logger.util';

const app = express();
const logger = new Logger('Express');

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors(corsOptions));
    app.use(sessionConfig);
    app.use(
      morgan('dev', {
        stream: {
          write: (msg) => {
            logger.debug(msg.trim());
          },
        },
      })
    );

    app.use('/v1', router);
    app.all('*', notFound);
    app.use(errorHandler);

    app.listen(env.PORT, () => {
      logger.info(`🚀 Started on http://localhost:${env.PORT}/v1`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });
