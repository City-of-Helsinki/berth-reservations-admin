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
    <path d="M239.66 127.42c5.7-7.29 9.27-11.42 16.34-11.42s10.64 4.13 16.33 11.42c6.12 7.83 13.73 17.58 28.95 17.58h8v-16h-8c-7.07 0-10.64-4.13-16.33-11.42C278.83 109.75 271.22 100 256 100s-22.83 9.75-28.95 17.58c-5.69 7.29-9.26 11.42-16.33 11.42h-8v16h8c15.22 0 22.83-9.75 28.94-17.58zM406.5 181.47A24.5 24.5 0 0 0 382 157H130a24.5 24.5 0 0 0-24.47 24.47V280H117v73.63A37.41 37.41 0 0 0 154.37 391h203.26A37.41 37.41 0 0 0 395 353.63V280h11.5zm-16 0V264H351v-91h31a8.48 8.48 0 0 1 8.5 8.47zm-269 0A8.48 8.48 0 0 1 130 173h31.62v91H121.5zM379 353.63A21.39 21.39 0 0 1 357.63 375H154.37A21.39 21.39 0 0 1 133 353.63V280h28.59v44h16v-44h30.91v-16h-30.91v-91H335v91h-31.5v16H335v44h16v-44h28z" />
    <path d="M225 303h63v-63h-63zm16-47h31v31h-31z" />
  </svg>
);
