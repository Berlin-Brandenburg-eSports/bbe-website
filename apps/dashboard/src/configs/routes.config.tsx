import { ComponentType, ReactNode } from 'react';
import { MdGamepad, MdHome, MdPerson, MdSportsEsports, MdSupervisedUserCircle } from 'react-icons/md';
import DepartmentsPage from '../pages/departments';
import GamesPage from '../pages/games';
import HomePage from '../pages/home';
import TeamsPage from '../pages/teams';
import UsersPage from '../pages/users';

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
    path: '/users',
    label: 'Mitglieder',
    icon: <MdPerson />,
    component: UsersPage,
  },
  {
    path: '/departments',
    label: 'Abteilungen',
    icon: <MdSupervisedUserCircle />,
    component: DepartmentsPage,
  },
  {
    path: '/teams',
    label: 'Teams',
    icon: <MdGamepad />,
    component: TeamsPage,
  },
  {
    path: '/games',
    label: 'Spiele',
    icon: <MdSportsEsports />,
    component: GamesPage,
  },
];
