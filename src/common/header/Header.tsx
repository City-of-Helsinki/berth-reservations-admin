import React from 'react';

import ExternalLink, { Props as LinkProps } from '../externalLink/ExternalLink';
import HelsinkiLogo from '../helsinkiLogo/HelsinkiLogo';
import styles from './header.module.scss';

const Header = ({ href }: LinkProps) => {
  return (
    <header className={styles.header}>
      <ExternalLink href={href}>
        <HelsinkiLogo color="white" />
      </ExternalLink>
    </header>
  );
};

export default Header;
