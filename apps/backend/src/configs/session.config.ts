import { env } from '@bbe/types';
import MongoStore from 'connect-mongo';
import session from 'express-session';

export default session({
  store: MongoStore.create({ mongoUrl: env.MONGO_URI, collectionName: 'sessions' }),
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    domain: env.COOKIE_DOMAIN,
    secure: env.NODE_ENV === 'production',
  },
  name: env.CONNECTION_COOKIE,
});
