import React from 'react';

import Icon from '../icon/Icon';
import Link from './Link';

export default {
  component: Link,
  title: 'Link',
};

export const all = () => (
  <div>
    <Link href="https://github.com/City-of-Helsinki/berth-reservations-admin/">
      Default
    </Link>
    <br />
    <Link href="https://github.com/City-of-Helsinki/berth-reservations-admin/">
      <Icon name="arrowRight" aria-hidden />
      With icon in front
    </Link>
    <br />
    <Link
      containsIcon
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
      aria-label="Toggle side bar"
    >
      <Icon name="arrowRight" aria-hidden />
    </Link>
    <br />
    <Link
      containsIcon
      withArrow
      href="https://github.com/City-of-Helsinki/berth-reservations-admin/"
    >
      With arrow behind
    </Link>
    <br />
  </div>
);
