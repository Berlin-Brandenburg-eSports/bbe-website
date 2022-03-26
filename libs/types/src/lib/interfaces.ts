import { Href } from './types';

export interface Route {
  href: Href;
  title: string;
  description?: string;
}
