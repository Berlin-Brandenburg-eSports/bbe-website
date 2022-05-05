import classNames from 'classnames';
import { FC } from 'react';
import Link from '../Link';
import { navbarLinks } from './navbarLinks';

interface SidebarProps {
  open: boolean;
  onClick: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, onClick }) => {
  return (
    <ul
      className={classNames(
        'flex',
        'flex-col',
        'md:hidden',
        'flex-grow',
        'h-screen',
        'absolute',
        'top-16',
        'bottom-0',
        'bg-black',
        'left-0',
        'w-60',
        'z-20',
        'transition',
        open ? classNames('bg-opacity-100') : classNames('bg-opacity-0'),
        { '-translate-x-full': !open }
      )}
    >
      {navbarLinks.map(({ href, label, icon, className }) => (
        <li key={`navbar-${href}`}>
          <Link href={href}>
            <a
              onClick={onClick}
              className={classNames(
                'flex',
                'items-center',
                'px-4',
                'py-3',
                'hover:text-primary',
                'transition-colors',
                'ease-in-out',
                className
              )}
            >
              <span className={classNames('mr-2')}>{icon}</span>
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
