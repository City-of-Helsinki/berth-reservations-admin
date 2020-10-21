import React, { useState } from 'react';
import classNames from 'classnames';
import { IconAngleLeft, IconAngleRight } from 'hds-react';

import styles from './layout.module.scss';
import Button from '../button/Button';

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
        <nav className={styles.side}>
          <div className={classNames(styles.sidebar, !sidebarVisible && styles.sidebarHidden)}>{sidebar}</div>
          <div className={styles.sidebarToggleArea}>
            <Button
              className={classNames(styles.sidebarToggle, !sidebarVisible && styles.sidebarToggleShow)}
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              {sidebarVisible ? <IconAngleLeft /> : <IconAngleRight />}
            </Button>
          </div>
        </nav>
      )}
      <div className={styles.content}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </main>
  );
};

export default Layout;
