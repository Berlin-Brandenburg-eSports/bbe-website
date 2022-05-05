import { Page } from './enums';
import { BackendEnvironment, DashboardEnvironment, FrontendEnvironment } from './interfaces';

export type Href = `${Page}`;
export type NodeEnv = 'development' | 'production' | 'test';
export type Environment = BackendEnvironment | FrontendEnvironment | DashboardEnvironment;
