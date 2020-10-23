import React from 'react';
import { action } from '@storybook/addon-actions';

import OpenInvoicesCard from './OpenInvoicesCard';
import { mockInvoices } from '../__fixtures__/mockData';

export default {
  component: OpenInvoicesCard,
  title: 'OpenInvoicesCard',
};

export const openInvoicesCard = () => (
  <OpenInvoicesCard invoices={mockInvoices} handleShowInvoice={action("Here's your invoice!")} />
);

openInvoicesCard.story = {
  name: 'Default',
};
