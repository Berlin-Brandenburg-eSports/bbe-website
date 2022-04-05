import MongoStore from 'connect-mongo';
import session from 'express-session';
import { env } from './env.config';

export default session({
  store: MongoStore.create({ mongoUrl: env.MONGO_URI, collectionName: 'sessions' }),
  secret: env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: (365 * 24 * 60 * 60 * 1000) / 12,
    domain: env.COOKIE_DOMAIN,
  },
  name: env.CONNECTION_COOKIE,
});
