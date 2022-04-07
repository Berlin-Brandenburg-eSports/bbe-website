import { Href, NodeEnv } from './types';

export interface Route {
  href: Href;
  title: string;
  description?: string;
}

export interface BackendEnvironment {
  NODE_ENV: NodeEnv;
  PORT: number;
  FRONTEND_URL: string;
  API_URL: string;
  MONGO_URI: string;
  SESSION_SECRET: string;
  COOKIE_DOMAIN: string;
  CONNECTION_COOKIE: string;
  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;
  CRYPTO_SECRET: string;
}

export interface FrontendEnvironment {
  NODE_ENV: NodeEnv;
}

export interface User {
  id: string;
  tag: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}
