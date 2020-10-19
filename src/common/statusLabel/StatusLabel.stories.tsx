import React from 'react';

import StatusLabel from './StatusLabel';

export default {
  component: StatusLabel,
  title: 'StatusLabel',
};

export const statusLabel = () => (
  <>
    <StatusLabel label="Error" type="error" />
    <StatusLabel label="Warning" type="warning" />
    <StatusLabel label="Alert" type="alert" />
    <StatusLabel label="Success" type="success" />
    <StatusLabel label="Neutral" type="neutral" />
    <StatusLabel label="Info" type="info" />
  </>
);

statusLabel.story = {
  name: 'Default',
};
