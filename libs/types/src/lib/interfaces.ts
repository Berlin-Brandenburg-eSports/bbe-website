import { Role } from './enums';
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
  DISCORD_TOKEN: string;
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

export interface Payment {
  accountOwner?: string;
  institution: string;
  iban: string;
  bic: string;
}

export interface User {
  id: string;
  nick: string;
  username: string;
  discriminator: number;
  tag: string;
  avatar: string;
  discord: boolean;
  website: boolean;
  accessToken: string;
  refreshToken: string;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  zip: number;
  city: string;
  role: Role;
  email: string;
  phone: string;
  birthday?: Date;
  payment?: Payment;
}

export interface Auth {
  authenticated: boolean;
  role: Role;
}
