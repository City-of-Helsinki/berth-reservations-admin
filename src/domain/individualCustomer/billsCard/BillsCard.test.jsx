import React from 'react';
import { shallow } from 'enzyme';

import BillsCard from './BillsCard';

const mockProps = {
  berthPlace: 'Pursilahdenranta B 31',
  contractPeriod: '14.9.2019 - 10.6.2019',
  dueDate: '1.4.2019',
  basicFee: 284,
  mooringFee: ['28%', 79.52],
  electricityFee: ['12%', 34.08],
  waterFee: ['2%', 5.68],
  wasteFee: ['8%', 22.72],
  gateFee: 4,
  lightingFee: 10,
  total: 440,
  handleShowBill: jest.fn(),
};

describe('BillsCard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const getWrapper = (props = {}) => shallow(<BillsCard {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper(mockProps);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
