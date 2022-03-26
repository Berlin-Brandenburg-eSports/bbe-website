import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import Link from '../Link';

const Footer: FC = () => {
  return (
    <div className={classNames('container', 'text-sm', 'py-4')}>
      <div className={classNames('grid', 'grid-cols-2', 'gap-2')}>
        <div className={classNames('flex', 'flex-col', 'items-center')}>
          <div>
            <Image src="/bbe-logo.png" width={75} height={75} alt="Berlin Brandenburg eSports e.V." />
          </div>
          <div>
            Berlin-Brandenburg eSports e.V.
            <br />
            Grünefelder Straße 9
            <br />
            13589 Berlin
          </div>
        </div>
        <div className={classNames('flex', 'flex-col')}>
          <Link href="/satzung">
            <a>Satzung</a>
          </Link>
          <Link href="/beitragsordnung">
            <a>Beitragsordnung</a>
          </Link>
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>
        </div>
      </div>
      <div className={classNames('text-center', 'pt-4')}>&copy; 2022 Berlin Brandenburg eSports e.V.</div>
    </div>
  );
};

export default Footer;
