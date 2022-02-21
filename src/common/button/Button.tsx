import React from 'react';
import { Button as HDSButton, ButtonProps } from 'hds-react';

// HDS Button component with 'coat' theme by default
// Disable theme when isLoading prop is true so that loading state appears
// correctly
const Button = (props: ButtonProps) => <HDSButton theme={!props.isLoading ? 'coat' : undefined} {...props} />;

export default Button;
