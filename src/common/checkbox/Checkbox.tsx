import React from 'react';
import { Checkbox as HDSCheckbox, CheckboxProps } from 'hds-react';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

// This function creates a HDS Checkbox with the coat theme and fixed line height
const Checkbox = (props: CheckboxProps) => (
  <HDSCheckbox {...props} className={classNames(props.className, styles.checkbox)} />
);

export default Checkbox;
