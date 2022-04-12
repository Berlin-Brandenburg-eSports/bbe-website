import classNames from 'classnames';
import Image from 'next/image';
import Router from 'next/router';
import { FC, useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../services/auth.service';
import UserService from '../../services/user.service';
import Avatar from '../Avatar';
import Link from '../Link';
import { navbarLinks } from './navbarLinks';
import Sidebar from './Sidebar';

interface UserMenuProps {
  onClick: () => void;
}

const UserMenu: FC<UserMenuProps> = ({ onClick }) => {
  const handleLogout = async (): Promise<void> => {
    await UserService.logout();
    onClick();
    Router.push('/');
  };

  return (
    <div className={classNames('absolute', 'top-full', '-right-2', 'pt-4')}>
      <ul className={classNames('bg-black', 'bg-opacity-75', 'rounded-b')}>
        <li>
          <button className={classNames('px-4', 'py-2', 'text-primary')} onClick={handleLogout}>
            Abmelden
          </button>
        </li>
      </ul>
    </div>
  );
};

const Navbar: FC = () => {
  const { data: auth, mutate } = useAuth();
  const authenticated = !!auth?.authenticated;
  const [open, setOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const hrefStyles = classNames('hover:text-primary', 'transition-colors', 'ease-in-out');

  const toggleOpen =
    (isOpen: boolean): (() => void) =>
    () => {
      if (isOpen) {
        setOpen(true);
        document.body.classList.add('overflow-hidden');
      } else {
        setOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };

  const handleHover = (state?: boolean): (() => void) => {
    return () => {
      setUserOpen(state || !userOpen);
    };
  };

  return (
    <>
      <nav
        className={classNames(
          'fixed',
          'inset-x-0',
          'top-0',
          'z-20',
          'bg-black',
          'backdrop-blur-sm',
          'transition',
          'h-16',
          open ? classNames('bg-opacity-100', 'md:bg-opacity-75') : classNames('bg-opacity-75')
        )}
      >
        <div className={classNames('md:container', 'px-4', 'py-4', 'flex', 'items-center', 'justify-between', 'font-bold', 'italic')}>
          <button onClick={toggleOpen(!open)}>
            {open ? (
              <FaTimes className={classNames('flex', 'md:hidden')} size={20} />
            ) : (
              <FaBars className={classNames('flex', 'md:hidden')} size={20} />
            )}
          </button>
          <Link href="/">
            <a onClick={toggleOpen(false)} className={classNames('flex', 'flex', 'items-center', 'md:pr-4')}>
              <Image src="/bbe-icon.png" alt="BBE" width={32} height={32} priority />
            </a>
          </Link>
          <ul className={classNames('hidden', 'md:flex', 'flex-grow', 'mx-2')}>
            {navbarLinks
              .filter(({ desktop }) => desktop)
              .map(({ href, title }) => (
                <li key={`navbar-${href}`} className={classNames('px-2', hrefStyles)}>
                  <Link href={href}>
                    <a onClick={toggleOpen(false)}>{title}</a>
                  </Link>
                </li>
              ))}
          </ul>
          <div
            className={classNames('flex', 'items-center', 'relative')}
            onMouseEnter={handleHover(true)}
            onMouseLeave={handleHover(false)}
          >
            <Link href="/konto">
              <a onClick={toggleOpen(false)} className={classNames(hrefStyles, 'ml-4', 'w-8', 'h-8')}>
                {authenticated ? <Avatar /> : <FaUserCircle size={32} />}
              </a>
            </Link>

            {userOpen && authenticated && <UserMenu onClick={mutate} />}
          </div>
        </div>
        <Sidebar open={open} onClick={toggleOpen(false)} />
      </nav>
      <button
        className={classNames(
          'fixed',
          'transition',
          'inset-0',
          'bg-black',
          'z-10',
          open ? classNames('visible', 'bg-opacity-75') : classNames('invisible', 'bg-opacity-0')
        )}
        onClick={toggleOpen(false)}
      />
    </>
  );
};

export default Navbar;
