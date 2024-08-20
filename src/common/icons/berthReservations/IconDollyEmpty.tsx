import React from 'react';
import classNames from 'classnames';
import styles from '../icon.module.scss';
import { IconProps } from '../index';

export default ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 480 480"
    className={classNames(styles.icon, styles[size], className)}
    {...rest}
  >
    <path d="M456.93 233.27l-10.42-10.42.14-.13-6.47-6.2-8.7-8.7-.19.18-28-26.84-24.91 26 27.46 26.31-35.94 36a70.3 70.3 0 0 0-85.9-5.94l-97.31-97.31c-19.2-19.21-42.56-27.17-67.53-23-21 3.47-42.28 15.54-61.66 34.92l-12.74 12.69 25.45 25.46 12.73-12.73c16.84-16.83 49.39-40.77 78.27-11.89l99 99a70.19 70.19 0 0 0 112.56 80.69 70.22 70.22 0 0 0 17.16-71.08zM347.31 345.91a34.16 34.16 0 1 1 0-48.33 34.22 34.22 0 0 1 0 48.33z" />
  </svg>
);
