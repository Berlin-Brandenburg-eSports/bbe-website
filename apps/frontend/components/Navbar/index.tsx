import classNames from 'classnames';
import Image from 'next/image';
import Router from 'next/router';
import { FC, useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import AuthService from '../../services/auth.service';
import { useAuth } from '../../services/swr.service';
import Avatar from '../Avatar';
import Background from '../Background';
import Link from '../Link';
import { navbarLinks } from './navbarLinks';
import Sidebar from './Sidebar';

interface UserMenuProps {
  onClick: () => void;
}

const UserMenu: FC<UserMenuProps> = ({ onClick }) => {
  const handleLogout = async (): Promise<void> => {
    await AuthService.logout();
    onClick();
    Router.push('/');
  };

  return (
    <div className={classNames('pt-4')}>
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

  return (
    <>
      <Background onClick={toggleOpen(false)} visible={open} />
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
          <button onClick={toggleOpen(!open)} className={classNames('w-8')}>
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
              .map(({ href, label }) => (
                <li key={`navbar-${href}`} className={classNames('px-2', hrefStyles)}>
                  <Link href={href}>
                    <a onClick={toggleOpen(false)}>{label}</a>
                  </Link>
                </li>
              ))}
          </ul>
          <div className={classNames('flex', 'group', 'items-center', 'relative')}>
            <Link href="/konto">
              <a onClick={toggleOpen(false)} className={classNames(hrefStyles, 'w-8', 'h-8')}>
                {authenticated ? <Avatar /> : <FaUserCircle size={32} />}
              </a>
            </Link>
            <div className={classNames('group-hover:block', 'absolute', 'hidden', 'top-full', 'right-0')}>
              {authenticated && <UserMenu onClick={mutate} />}
            </div>
          </div>
        </div>
        <Sidebar open={open} onClick={toggleOpen(false)} />
      </nav>
    </>
  );
};

export default Navbar;
