import { ComponentType, ReactNode } from 'react';
import { MdHome, MdSupervisedUserCircle } from 'react-icons/md';
import HomePage from '../pages/home';
import MembersPage from '../pages/members';

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
  {
    path: '/members',
    label: 'Mitglieder',
    icon: <MdSupervisedUserCircle />,
    component: MembersPage,
  },
];
