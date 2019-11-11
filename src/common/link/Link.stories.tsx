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
      primary
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      linkColor="textPrimary"
    >
      textPrimary
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      linkColor="textSecondary"
    >
      textSecondary
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
      underline="always"
    >
      error underline always
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      underline="none"
    >
      error underline on hover
    </Link>
    <br />
    <Link
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      underline="hover"
    >
      error underline on hover
    </Link>
    <br />
  </div>
);
