import { Href } from '@bbe/types';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

interface LinkProps extends NextLinkProps {
  href: Href;
}

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
