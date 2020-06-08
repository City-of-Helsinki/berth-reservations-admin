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
    <path d="M294.37 344.75h32v55.77h-32zM200.584 355.229l41.577-41.664 22.651 22.604-41.577 41.664zM362.922 336.221l22.65-22.604 41.577 41.664-22.65 22.604z" />
    <path d="M321.32 143.85h-.95v-71.3h-126.7a93.65 93.65 0 0 0-67.59 28.32C108.36 119 98.6 143.43 98.6 169.57V461h95.26v-32H130.6V169.57c0-36.46 27.71-65 63.07-65h94.7v39.3h-.94c-64.88 0-117.66 49.82-117.66 111.07v16h73.43a60.61 60.61 0 0 0 20.8 30.33c13.82 11.08 32.38 17.18 52.26 17.18s38.44-6.1 52.26-17.18a60.61 60.61 0 0 0 20.78-30.35H439v-16c0-61.25-52.8-111.07-117.68-111.07zm-5.08 142.6c-16.55 0-30.36-6.1-37.67-15.53h75.35c-7.32 9.43-21.13 15.53-37.68 15.53zm75.3-47.53h-188c8-36 42.6-63.07 83.9-63.07h33.89c41.3 0 75.87 27.11 83.9 63.07z" />
  </svg>
);
