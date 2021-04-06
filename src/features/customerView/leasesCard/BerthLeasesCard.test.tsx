import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import BerthLeasesCard, { BerthLeasesCardProps } from './BerthLeasesCard';
import { BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';

jest.mock('../../contractDetails/BerthContractDetailsContainer', () => {
  const BerthContractDetailsContainer = () => <div>Mocked</div>;

  return {
    __esModule: true,
    default: BerthContractDetailsContainer,
  };
});

describe('BerthLeasesCard', () => {
  const initialProps: BerthLeasesCardProps = {
    cancelLease: jest.fn(),
    createLease: jest.fn(),
    customerName: 'Tester McTestington',
    leases: [
      {
        berthNum: '1',
        depth: 6,
        endDate: '2019-09-10',
        harbor: {
          id: 'MOCK-HARBOR-1',
          name: 'Pursilahdenranta',
        },
        id: '1234',
        isActive: true,
        length: 6,
        mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
        pierIdentifier: '7G',
        startDate: '2019-06-14',
        status: LeaseStatus.DRAFTED,
        width: 3,
      },
      {
        berthNum: '1',
        depth: null,
        endDate: '2020-06-15',
        harbor: {
          id: 'MOCK-HARBOR-2',
          name: 'Telakkakatu 1',
        },
        id: '4321',
        isActive: false,
        length: 6,
        mooringType: BerthMooringType.SIDE_SLIP_PLACE,
        pierIdentifier: 'A',
        startDate: '2019-05-20',
        status: LeaseStatus.TERMINATED,
        width: 3,
      },
    ],
  };

  const getWrapper = (props?: Partial<BerthLeasesCardProps>) =>
    mount(
      <HashRouter>
        <BerthLeasesCard {...initialProps} {...props} />
      </HashRouter>
    );

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
