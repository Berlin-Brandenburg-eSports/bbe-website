import classNames from 'classnames';
import { FC, useEffect } from 'react';

interface BackgroundProps {
  visible: boolean;
  onClick: () => void;
  fullSize?: boolean;
}

const Background: FC<BackgroundProps> = ({ visible, onClick, fullSize }) => {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [visible]);

  return (
    <button
      className={classNames(
        'fixed',
        'inset-0',
        'bg-black',
        'transition-all',
        'duration-300',
        'tab-transparent',
        'ease-in-out',
        'block',
        'h-full',
        'cursor-default',
        {
          'z-20': !fullSize,
          'z-50': fullSize,
          [classNames('invisible', 'bg-opacity-0')]: !visible,
          [classNames('visible', 'bg-opacity-50')]: visible,
        }
      )}
      onClick={onClick}
    />
  );
};

export default Background;
