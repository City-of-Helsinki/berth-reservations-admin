import React from 'react';
import { action } from '@storybook/addon-actions';

import { mockBills } from '../__fixtures__/mockData';
import InvoicingHistoryCard from './InvoicingHistoryCard';

export default {
  component: InvoicingHistoryCard,
  title: 'InvoicingHistoryCard',
};

export const invoicingHistoryCard = () => <InvoicingHistoryCard bills={mockBills} onClick={action("Here's your bill!")} />;

invoicingHistoryCard.story = {
  name: 'Default',
};
