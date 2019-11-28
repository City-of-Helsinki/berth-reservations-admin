import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

export const icon = () => <Icon name="fence" />;

icon.story = {
  name: 'Default',
};

export const small = () => <Icon name="fence" size="small" />;

export const large = () => <Icon name="fence" size="large" />;

export const xlarge = () => <Icon name="fence" size="xlarge" />;

export const xxlarge = () => <Icon name="fence" size="xxlarge" />;

export const outlined = () => <Icon name="fence" outlined />;

export const brand = () => <Icon name="fence" color="brand" />;

export const secondary = () => <Icon name="fence" color="secondary" />;

export const critical = () => <Icon name="fence" color="critical" />;

export const helsinki = () => (
  <Icon name="helsinkiLogo" size="large" rectangle={true} color="brand" />
);
