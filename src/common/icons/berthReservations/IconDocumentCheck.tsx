import React from 'react';
import classNames from 'classnames';

import styles from '../icon.module.scss';
import { IconProps } from '../index';

export default ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    className={classNames(styles.icon, styles[size], className)}
    {...rest}
  >
    <title>icons/document/24</title>
    <g id="icons/document/24" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M21,1 L21,23 L3,23 L3,9 L4.741,9 L4.7419366,21.3500004 L19.2580646,21.3500004 L19.2580646,2.65 L12,2.65 L12,1 L21,1 Z M17.6,18 L17.6,19.7 L6,19.7 L6,18 L17.6,18 Z M10,15 L10,16.7 L6,16.7 L6,15 L10,15 Z M4.26243563,3.08071012 L8.70639967,7.52507832 L11.7375646,4.49492357 L12.9497476,5.70710662 L9.9183807,8.73705934 L9.91928988,8.73756437 L8.70710678,9.94974747 L3.05025253,4.29289322 L4.26243563,3.08071012 Z"
        id="aggreements_icon"
        fill="currentColor"
        transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
      ></path>
    </g>
  </svg>
);
