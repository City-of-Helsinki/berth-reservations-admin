import React from 'react';
import { RadioButton as HDSRadioButton, RadioButtonProps } from 'hds-react';
import classNames from 'classnames';
import styles from './radioButton.module.scss';

// This function creates a HDS RadioButton with the coat theme and fixed line height
const RadioButton = (props: RadioButtonProps) => (
  <HDSRadioButton {...props} className={classNames(props.className, styles.radioButton)} />
);

export default RadioButton;
