import { ComponentType, ReactNode } from 'react';
import { MdHome } from 'react-icons/md';
import HomePage from '../pages/home';

interface DashboardRoute {
  path: `/${string}`;
  label: string;
  icon: ReactNode;
  component: ComponentType;
}
export const routes: DashboardRoute[] = [
  {
    path: '/',
    label: 'Home',
    icon: <MdHome />,
    component: HomePage,
  },
];
