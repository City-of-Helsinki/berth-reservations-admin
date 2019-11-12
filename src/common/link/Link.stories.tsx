import React from 'react';

import Link from './Link';

export default {
  component: Link,
  title: 'Link',
};

export const all = () => (
  <div>
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      color="standard"
    >
      link
    </Link>
    <br />

    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      variant="withArrow"
    >
      with arrow
    </Link>
    <br />
  </div>
);
