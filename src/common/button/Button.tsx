import React from 'react';
import { Button as HDSButton, ButtonProps } from 'hds-react';

// HDS Button component with 'coat' theme by default
const Button = (props: ButtonProps) => <HDSButton theme="coat" {...props} />;

export default Button;
