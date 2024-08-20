import React from 'react';
import classNames from 'classnames';
import { LoadingSpinner as HDSLoadingSpinner, LoadingSpinnerProps as HDSLoadingSpinnerProps } from 'hds-react';
import { useTranslation } from 'react-i18next';
import styles from './loadingSpinner.module.scss';

export interface LoadingSpinnerProps {
  className?: string;
  size?: HDSLoadingSpinnerProps['size'];
}

const LoadingSpinner = ({ className, size }: LoadingSpinnerProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.spinnerWrapper, className)}>
      <HDSLoadingSpinner size={size} loadingText={t('common.loading')} />
    </div>
  );
};

export default LoadingSpinner;
