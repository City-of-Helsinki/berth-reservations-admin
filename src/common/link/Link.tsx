import React from 'react';

import withAnchor from './withAnchor';

export interface Props {
  href: string;
  linkColor?: 'default' | 'error' | 'primary' | 'textPrimary' | 'textSecondary';
  underline?: 'none' | 'hover' | 'always';
  variant?: 'default' | 'withArrow';
  children: React.ReactNode;
}

const Link = ({ href, linkColor, underline, variant, children }: Props) => (
  <Link
    href={href}
    linkColor={linkColor}
    underline={underline}
    variant={variant}
  >
    {children}
  </Link>
);

const WrappedComponent = withAnchor(Link);

export default WrappedComponent;
