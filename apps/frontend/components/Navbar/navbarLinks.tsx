import { Href, Pages, Route } from '@bbe/types';
import { FaHome, FaLink, FaNewspaper, FaUsers } from 'react-icons/fa';

interface NavbarLink extends Route {
  desktop: boolean;
  icon: JSX.Element;
  className?: string;
}

const pages: Href[] = ['/', '/news', '/teams'];

export const navbarLinks: NavbarLink[] = Pages.filter(({ href }) => pages.some((p) => p === href)).map((page) => {
  switch (page.href) {
    case '/':
      return { ...page, desktop: false, icon: <FaHome /> };
    case '/teams':
      return { ...page, desktop: true, icon: <FaUsers /> };
    case '/news':
      return { ...page, desktop: true, icon: <FaNewspaper /> };
    default:
      return { ...page, desktop: false, icon: <FaLink /> };
  }
});
