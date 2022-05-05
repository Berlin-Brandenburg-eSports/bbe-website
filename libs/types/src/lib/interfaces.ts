import { Role } from './enums';
import { NodeEnv } from './types';

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
  reduced: boolean;
}

export interface Contact {
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  zip: string;
  city: string;
  email: string;
  phone: string;
  birthday?: Date;
}

export interface Discord {
  nick: string;
  username: string;
  discriminator: number;
  tag: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  memberId: string;
  server: boolean;
  website: boolean;
  discord: Discord;
  contact: Contact;
  role: Role;
  teams: Array<Team['slug']>;
  payment?: Payment;
}

export interface Auth {
  authenticated: boolean;
  role: Role;
}

export interface Department {
  name: string;
  slug: string;
  roleId: string;
  leader?: User['id'];
}

export interface Team {
  name: string;
  slug: string;
  members: Array<User['id']>;
  game: Game['slug'];
}

export interface Game {
  name: string;
  slug: string;
  teams: Array<Team['slug']>;
}
