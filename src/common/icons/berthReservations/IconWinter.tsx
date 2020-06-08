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
    <path
      d="M9.299.5v2.91L7.036 2.163l-.682 1.221 2.945 1.639v5.231L4.643 7.602l.027-3.279H3.241l-.025 2.466L.707 5.367 0 6.586l2.535 1.446-2.213 1.31.733 1.192 2.893-1.688 4.644 2.629-4.644 2.655-2.893-1.691-.733 1.195 2.211 1.295L0 16.39l.707 1.219 2.509-1.423.025 2.439H4.67l-.027-3.276 4.656-2.628v5.205l-2.945 1.639.682 1.244 2.263-1.268V22.5h1.428v-2.911l2.186 1.22.682-1.244-2.868-1.587v-5.284l4.553 2.604-.026 3.327h1.416l.038-2.528 2.572 1.487.72-1.218v-.001l-2.559-1.46 2.161-1.271-.708-1.195-2.88 1.667-4.58-2.631 4.58-2.604 2.88 1.663.708-1.192-2.161-1.271L20 6.611V6.61l-.72-1.22-2.572 1.475-.039-2.542h-1.415l.026 3.355-4.553 2.605V4.998l2.868-1.614-.682-1.221-2.186 1.221V.5z"
      fill-rule="evenodd"
    />
  </svg>
);