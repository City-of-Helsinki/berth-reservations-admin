import React from 'react';
import { shallow } from 'enzyme';

import InvoicingHistoryCard from '../InvoicingHistoryCard';
import { mockBills } from '../../__fixtures__/mockData';

describe('InvoicingHistoryCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InvoicingHistoryCard bills={mockBills} onClick={jest.fn} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
