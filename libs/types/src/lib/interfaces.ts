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
  DASHBOARD_URL: string;
  API_URL: string;
  MONGO_URI: string;
  SESSION_SECRET: string;
  COOKIE_DOMAIN: string;
  CONNECTION_COOKIE: string;
  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;
  DISCORD_GUILD_ID: string;
  CRYPTO_SECRET: string;
}

export interface FrontendEnvironment {
  NODE_ENV: NodeEnv;
  API_URL: string;
  CONNECTION_COOKIE: string;
}

export interface DashboardEnvironment {
  NODE_ENV: NodeEnv;
  API_URL: string;
}

export interface User {
  id: string;
  nick: string;
  username: string;
  discriminator: number;
  tag: string;
  avatar: string;
  joined: boolean;
  accessToken: string;
  refreshToken: string;
}
