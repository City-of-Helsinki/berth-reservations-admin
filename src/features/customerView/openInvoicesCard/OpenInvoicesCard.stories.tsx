import React from 'react';
import { action } from '@storybook/addon-actions';

import OpenInvoicesCard from './OpenInvoicesCard';
import { mockBills } from '../__fixtures__/mockData';

export default {
  component: OpenInvoicesCard,
  title: 'OpenInvoicesCard',
};

export const openInvoicesCard = () => <OpenInvoicesCard bills={mockBills} handleShowBill={action("Here's your bill!")} />;

openInvoicesCard.story = {
  name: 'Default',
};
