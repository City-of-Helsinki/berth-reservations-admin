import React from 'react';

import styles from './paragraph.module.scss';

const Paragraph = ({ children }: { children?: React.ReactNode }) => (
  <article className={styles.paragraph}>{children}</article>
);

export default Paragraph;
