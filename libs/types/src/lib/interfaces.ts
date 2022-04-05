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
  SALT_ROUNDS: number;
}

export interface FrontendEnvironment {
  NODE_ENV: NodeEnv;
}

export interface User {
  id: number;
  accessToken: string;
  refreshToken: string;
}
