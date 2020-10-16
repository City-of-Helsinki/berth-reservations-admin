import React from 'react';

import Chip from './Chip';

export default {
  component: Chip,
  title: 'Chip',
};

export const chip = () => (
  <>
    <Chip label="Error" type="error" />
    <Chip label="Warning" type="warning" />
    <Chip label="Alert" type="alert" />
    <Chip label="Success" type="success" />
    <Chip label="Neutral" type="neutral" />
    <Chip label="Info" type="info" />
  </>
);

chip.story = {
  name: 'Default',
};
