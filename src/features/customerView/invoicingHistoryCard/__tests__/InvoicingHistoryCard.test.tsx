import React from 'react';
import { shallow } from 'enzyme';

import InvoicingHistoryCard from '../InvoicingHistoryCard';
import { mockInvoices } from '../../__fixtures__/mockData';

describe('InvoicingHistoryCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InvoicingHistoryCard invoices={mockInvoices} onClick={jest.fn} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
