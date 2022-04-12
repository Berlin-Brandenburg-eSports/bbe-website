import { DashboardEnvironment, NodeEnv } from '@bbe/types';

export const env: DashboardEnvironment = {
  NODE_ENV: process.env['NODE_ENV'] as NodeEnv,
  API_URL: process.env['NX_API_URL']!,
};
