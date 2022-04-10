import { FrontendEnvironment } from '@bbe/types';

export const env: FrontendEnvironment = {
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.NX_API_URL!,
  CONNECTION_COOKIE: process.env.NX_CONNECTION_COOKIE!,
};
