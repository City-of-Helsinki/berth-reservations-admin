import React, { useState } from 'react';
import classNames from 'classnames';
import { IconAngleLeft, IconAngleRight } from 'hds-react';

import styles from './layout.module.scss';

export interface LayoutProps {
  header: JSX.Element;
  sidebar?: JSX.Element;
  children: React.ReactNode;
  footer?: JSX.Element;
}

const Layout = ({ header, sidebar, children, footer }: LayoutProps) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <main className={classNames(styles.layout, { [styles.noSidebar]: !sidebar })}>
      <header className={styles.header}>{header}</header>
      {sidebar && (
        <nav className={classNames(styles.side)}>
          <div className={classNames(styles.sidebar, !sidebarVisible && styles.sidebarHidden)}>{sidebar}</div>
          <button className={styles.sidebarToggle} onClick={() => setSidebarVisible(!sidebarVisible)}>
            {sidebarVisible ? <IconAngleLeft /> : <IconAngleRight />}
          </button>
        </nav>
      )}
      <div className={styles.content}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </main>
  );
};

export default Layout;
