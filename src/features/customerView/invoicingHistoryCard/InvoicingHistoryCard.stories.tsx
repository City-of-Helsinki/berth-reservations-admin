import React from 'react';
import { action } from '@storybook/addon-actions';

import { mockInvoices } from '../__fixtures__/mockData';
import InvoicingHistoryCard from './InvoicingHistoryCard';

export default {
  component: InvoicingHistoryCard,
  title: 'InvoicingHistoryCard',
};

export const invoicingHistoryCard = () => (
  <InvoicingHistoryCard invoices={mockInvoices} onClick={action("Here's your invoice!")} />
);

invoicingHistoryCard.story = {
  name: 'Default',
};
