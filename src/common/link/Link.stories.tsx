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
      linkColor="primary"
    >
      link
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      linkColor="textPrimary"
    >
      visited
    </Link>
    <br />

    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      linkColor="error"
    >
      error
    </Link>
    <br />

    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      underline="none"
    >
      no underline
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      underline="always"
    >
      always underline
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      underline="hover"
    >
      underline on hover
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
