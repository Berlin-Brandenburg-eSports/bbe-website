import { Environment } from './interfaces';
import { NodeEnv } from './types';

export const env: Environment = {
  NODE_ENV: process.env['NODE_ENV'] as NodeEnv,
  API_URL: process.env['NX_API_URL']!,
  PORT: Number(process.env.NX_PORT),
  FRONTEND_URL: process.env.NX_FRONTEND_URL!,
  DASHBOARD_URL: process.env.NX_DASHBOARD_URL!,
  CONNECTION_COOKIE: process.env.NX_CONNECTION_COOKIE!,
  COOKIE_DOMAIN: process.env.NX_COOKIE_DOMAIN!,
  SESSION_SECRET: process.env.NX_SESSION_SECRET!,
  MONGO_URI: process.env.NX_MONGO_URI!,
  DISCORD_CLIENT_ID: process.env.NX_DISCORD_CLIENT_ID!,
  DISCORD_CLIENT_SECRET: process.env.NX_DISCORD_CLIENT_SECRET!,
  DISCORD_GUILD_ID: process.env.NX_DISCORD_GUILD_ID!,
  DISCORD_TOKEN: process.env.NX_DISCORD_TOKEN!,
  CRYPTO_SECRET: process.env.NX_CRYPTO_SECRET!,
};
