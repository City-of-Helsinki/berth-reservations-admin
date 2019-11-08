import React from 'react';

import Button from './Button';
import Icon from '../icon/Icon';

export default {
  component: Button,
  title: 'Button',
};

export const button = () => <Button>Button</Button>;

button.story = {
  name: 'Default',
};

export const primary = () => (
  <div>
    <Button color="brand" size="small">
      Button
    </Button>
    <br />
    <Button color="brand" size="standard">
      Button
    </Button>
    <br />
    <Button color="brand" size="large">
      Button
    </Button>
  </div>
);

export const critical = () => <Button color="critical">Button</Button>;

export const secondary = () => <Button color="secondary">Button</Button>;

export const outlined = () => (
  <Button color="secondary" variant="outlined">
    Button
  </Button>
);

export const text = () => (
  <Button color="secondary" variant="text">
    Button
  </Button>
);

export const withIcon = () => (
  <Button icon={<Icon name="tools" />}>Button</Button>
);
