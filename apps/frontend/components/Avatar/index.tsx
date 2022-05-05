import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useUser } from '../../services/swr.service';

interface AvatarProps {
  size?: number;
  id?: string;
}

const Avatar: FC<AvatarProps> = ({ id, size = 32 }) => {
  const { data: user } = useUser(id);

  if (!user) {
    return <FaUserCircle size={size} />;
  }

  return (
    <Image
      src={`${user.discord.avatar}?size=${size * 2}`}
      width={size}
      height={size}
      alt={user.discord.nick}
      className={classNames('rounded-full')}
    />
  );
};

export default Avatar;
