import { Href, Pages } from '@bbe/types';
import classNames from 'classnames';
import { compact } from 'lodash';
import Image from 'next/image';
import { FC } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import Link from '../Link';

const Navbar: FC = () => {
  const links: Href[] = ['/news', '/teams'];
  const pages = compact(links.map((href) => Pages.find((page) => page.href === href)));

  const hrefStyles = classNames('hover:text-primary', 'transition-colors', 'ease-in-out');

  return (
    <nav className={classNames('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'bg-black', 'backdrop-blur-sm', 'bg-opacity-75', 'h-16')}>
      <div className={classNames('container', 'py-4', 'flex', 'items-center', 'font-bold', 'italic')}>
        <FaBars className={classNames('flex', 'md:hidden')} />
        <Link href="/">
          <a className={classNames('hidden', 'md:flex', 'flex', 'items-center', 'pr-4')}>
            <Image src="/bbe-icon.png" alt="BBE" width={32} height={32} />
          </a>
        </Link>
        <ul className={classNames('flex-grow', 'flex', 'mx-2')}>
          {pages.map(({ href, title }) => (
            <li key={`navbar-${href}`} className={classNames('px-2', hrefStyles)}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/konto">
          <a className={classNames(hrefStyles)}>
            <FaUserCircle size="1.75rem" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
