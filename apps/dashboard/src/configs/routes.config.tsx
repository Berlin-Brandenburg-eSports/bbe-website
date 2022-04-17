import { ComponentType, ReactNode } from 'react';
import { MdHome, MdPerson, MdSupervisedUserCircle } from 'react-icons/md';
import DepartmentsPage from '../pages/departments';
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
    icon: <MdPerson />,
    component: MembersPage,
  },
  {
    path: '/departments',
    label: 'Abteilungen',
    icon: <MdSupervisedUserCircle />,
    component: DepartmentsPage,
  },
];
