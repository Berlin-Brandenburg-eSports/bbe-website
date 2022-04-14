import { ComponentType } from 'react';
import HomePage from '../pages/home';

interface DashboardRoute {
  path: `/${string}`;
  component: ComponentType;
}
export const routes: DashboardRoute[] = [
  {
    path: '/',
    component: HomePage,
  },
];
