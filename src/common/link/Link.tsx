import React from 'react';

import withAnchor from './withAnchor';

export interface Props {
  href?: string;
  to?: string;
  underline?: 'none' | 'hover' | 'always';
  variant?: 'default' | 'withArrow';
  children: React.ReactNode;
}

const Link = ({ href, underline, variant, children }: Props) => (
  <Link href={href} underline={underline} variant={variant}>
    {children}
  </Link>
);

const WrappedComponent = withAnchor(Link);

export default WrappedComponent;
