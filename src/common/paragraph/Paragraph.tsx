import React from 'react';

import styles from './paragraph.module.scss';

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className={styles.header}>{children}</header>
);

const Paragraph = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => (
  <article className={styles.paragraph}>
    {title && <Header>{title}</Header>}

    <p>{children}</p>
  </article>
);

export default Paragraph;
