import { Href } from '@bbe/types';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

interface LinkProps extends NextLinkProps {
  href: Href;
}

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
