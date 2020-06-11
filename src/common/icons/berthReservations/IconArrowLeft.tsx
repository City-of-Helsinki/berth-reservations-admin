import React from 'react';
import classNames from 'classnames';

import { IconProps } from '../Icon.interface';
import styles from '../icon.module.scss';

export default ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    className={classNames(styles.icon, styles[size], className)}
    {...rest}
  >
    <g>
      <polygon
        points="13.3706831 2 11.5237192 3.84696395 18.0000474 10.3242884 2 10.3242884 2 12.937334 17.9990512 12.937334 11.5237192 19.412666 13.3706831 21.2586338 23 11.6293169"
        transform="translate(12.500000, 11.629317) rotate(-180.000000) translate(-12.500000, -11.629317) "
      />
    </g>
  </svg>
);
