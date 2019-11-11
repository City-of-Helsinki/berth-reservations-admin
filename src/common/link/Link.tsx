import React from 'react';

import withAnchor from './withAnchor';

const Link = props => (
  <Link
    href={props.href}
    linkColor={props.linkColor}
    underline={props.underline}
    variant={props.variant}
  >
    {props.children}
  </Link>
);

const WrappedComponent = withAnchor(Link);

export default WrappedComponent;
