import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import BerthDetails, { BerthDetailsProps } from '../BerthDetails';
import { LeaseStatus } from '../../../@types/__generated__/globalTypes';

const minimumProps: BerthDetailsProps = {
  leases: [],
  comment: '',
};

const testLeases: BerthDetailsProps['leases'] = [
  {
    customer: {
      id: '0',
      firstName: '',
      lastName: '',
    },
    startDate: '2018-01-01',
    endDate: '2018-12-31',
    status: LeaseStatus.PAID,
    isActive: false,
  },
  {
    customer: {
      id: '1',
      firstName: 'Testi',
      lastName: 'Testinen',
    },
    startDate: '2019-01-01',
    endDate: '2019-12-31',
    status: LeaseStatus.PAID,
    isActive: false,
  },
  {
    customer: {
      id: '1',
      firstName: 'Testi',
      lastName: 'Testinen',
    },
    startDate: '2020-01-01',
    endDate: '2020-12-01',
    status: LeaseStatus.PAID,
    isActive: true,
  },
];

describe('BerthDetails', () => {
  const getWrapper = (props = {}) =>
    shallow(
      <HashRouter>
        <BerthDetails {...minimumProps} {...props} />
      </HashRouter>
    );

  it('renders normally with minimum props', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with all props', () => {
    const wrapper = getWrapper({
      comment: 'Comment',
      leases: testLeases,
      onEdit: jest.fn(),
    });

    expect(wrapper.render()).toMatchSnapshot();
  });
});
