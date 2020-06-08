import React from 'react';
import classNames from 'classnames';

import { IconProps } from '../Icon.interface';
import styles from '../icon.module.scss';

export default ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 480 480"
    className={classNames(styles.icon, styles[size], className)}
    {...rest}
  >
    <path d="M246 105.48c-5.72-16.24-20.38-35.58-57.76-35.58-37.17 0-52.21 19.16-58.29 35.23l-1 2.74v35.46h-.06L127 159.22c-2.93 25.28-10.11 43.91-21.36 55.37-10.64 10.88-25.51 15.85-45.38 15.22l-16-.51-1 32 16 .52c1.45 0 2.88.07 4.3.07 26.92 0 48.76-8.36 65-24.87.14-.14.27-.29.41-.44v216.1h118V108.06zm-57.76-3.58c19.06 0 24.53 7.1 26.67 11.87v48.42h-54v-48.13c3.02-6.06 9.42-12.16 27.32-12.16zm-27.33 318.76v-229h54v229z" />
  </svg>
);
