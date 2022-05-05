import { Href } from '@bbe/types';
import { FaHome, FaNewspaper, FaUsers } from 'react-icons/fa';

interface NavbarLink {
  href: Href;
  label: string;
  desktop: boolean;
  icon: JSX.Element;
  className?: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    href: '/',
    desktop: false,
    label: 'Startseite',
    icon: <FaHome />,
  },
  {
    href: '/news',
    desktop: true,
    label: 'News',
    icon: <FaNewspaper />,
  },
  {
    href: '/teams',
    desktop: true,
    label: 'Teams',
    icon: <FaUsers />,
  },
];
