import React from 'react';

import styles from './loadingSpinner.module.scss';

export interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading, children }) => {
  if (isLoading === true) {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner} />
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingSpinner;
