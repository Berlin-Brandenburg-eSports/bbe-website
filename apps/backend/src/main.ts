import { env, User } from '@bbe/types';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import { Session } from 'express-session';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { join } from 'path';
import corsOptions from './configs/cors.config';
import { passport } from './configs/passport.config';
import sessionConfig from './configs/session.config';
import router from './controllers';
import { errorHandler, notFound } from './middlewares/error.middleware';
import Logger from './utils/logger.util';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
    session: Session & {
      redirect?: string;
    };
  }
}

const app = express();
const logger = new Logger('Express');

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(corsOptions));
    app.use(sessionConfig);
    app.use(cookieParser());
    app.use(fileUpload({ createParentPath: true }));
    app.use(passport.initialize());
    app.use(passport.session());
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
    app.use(express.static(join(__dirname, 'public')));

    app.all('*', notFound);
    app.use(errorHandler);

    app.listen(env.PORT, () => {
      logger.info(`🚀 Started on http://localhost:${env.PORT}/v1`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });
