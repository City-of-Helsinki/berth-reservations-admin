
import React from 'react';

import styles from './title.module.scss';

const Title = ({ children }: { children: React.ReactNode }) => (
  <header className={styles.header}>{children}</header>
);

export default Title;