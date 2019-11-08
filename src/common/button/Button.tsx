import React from 'react';

import styles from './button.module.scss';

type Props = React.PropsWithChildren<{}>;

export default ({ children }: Props) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};
