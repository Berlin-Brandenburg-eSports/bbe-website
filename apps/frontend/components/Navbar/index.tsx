import classNames from 'classnames';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Link from '../Link';
import { navbarLinks } from './navbarLinks';
import Sidebar from './Sidebar';

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const hrefStyles = classNames('hover:text-primary', 'transition-colors', 'ease-in-out');

  const toggleOpen = (): void => {
    setOpen(!open);
    document.body.classList.toggle('overflow-hidden');
  };

  const onClick = (): void => {
    document.body.classList.remove('overflow-hidden');
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
          <button onClick={toggleOpen}>
            {open ? (
              <FaTimes className={classNames('flex', 'md:hidden')} size={20} />
            ) : (
              <FaBars className={classNames('flex', 'md:hidden')} size={20} />
            )}
          </button>
          <Link href="/">
            <a onClick={onClick} className={classNames('flex', 'flex', 'items-center', 'md:pr-4')}>
              <Image src="/bbe-icon.png" alt="BBE" width={32} height={32} priority />
            </a>
          </Link>
          <ul className={classNames('hidden', 'md:flex', 'flex-grow', 'mx-2')}>
            {navbarLinks
              .filter(({ desktop }) => desktop)
              .map(({ href, title }) => (
                <li key={`navbar-${href}`} className={classNames('px-2', hrefStyles)}>
                  <Link href={href}>
                    <a onClick={onClick}>{title}</a>
                  </Link>
                </li>
              ))}
          </ul>
          <div className={classNames('flex', 'items-center')}>
            <Link href="/konto">
              <a onClick={onClick} className={classNames(hrefStyles, 'ml-4')}>
                <FaUserCircle size="1.75rem" />
              </a>
            </Link>
          </div>
        </div>
        <Sidebar open={open} onClick={onClick} />
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
        onClick={toggleOpen}
      />
    </>
  );
};

export default Navbar;
