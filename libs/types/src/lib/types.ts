import { BackendEnvironment, DashboardEnvironment, FrontendEnvironment } from './interfaces';

export type Href = '/' | '/beitragsordnung' | '/impressum' | '/kontakt' | '/satzung' | '/spiele' | '/teams' | '/news' | '/konto';
export type NodeEnv = 'development' | 'production' | 'test';
export type Environment = BackendEnvironment | FrontendEnvironment | DashboardEnvironment;
