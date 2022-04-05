import { BackendEnvironment, NodeEnv } from '@bbe/types';

export const env: BackendEnvironment = {
  NODE_ENV: process.env.NODE_ENV as NodeEnv,
  PORT: Number(process.env.NX_PORT),
  FRONTEND_URL: process.env.NX_FRONTEND_URL!,
  API_URL: process.env.NX_API_URL!,
  CONNECTION_COOKIE: process.env.NX_CONNECTION_COOKIE!,
  COOKIE_DOMAIN: process.env.NX_COOKIE_DOMAIN!,
  SESSION_SECRET: process.env.NX_SESSION_SECRET!,
  MONGO_URI: process.env.NX_MONGO_URI!,
};
