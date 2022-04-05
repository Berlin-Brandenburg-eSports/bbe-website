import { BackendEnvironment, NodeEnv } from '@bbe/types';

export const env: BackendEnvironment = {
  NODE_ENV: process.env.NODE_ENV as NodeEnv,
  PORT: Number(process.env.NX_PORT),
};
