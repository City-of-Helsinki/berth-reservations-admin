import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import BerthOfferCard from '../BerthOfferCard';
import { ApplicationStatus, BerthMooringType, LeaseStatus } from '../../../../@types/__generated__/globalTypes';

describe('BerthOfferCard', () => {
  const getWrapper = (
    props = {
      leaseDetails: {
        id: '123456',
        berthComment: 'Testi',
        berthDepth: 3,
        berthIsAccessible: true,
        berthLength: 6,
        berthMooringType: BerthMooringType.DINGHY_PLACE,
        berthNum: '1',
        berthWidth: 4,
        customerEmail: 'test@example.com',
        electricity: true,
        gate: true,
        harborId: '123',
        harborName: 'Testisatama',
        lighting: true,
        pierIdentifier: 'Testilaituri',
        wasteCollection: true,
        water: true,
        order: null,
        status: LeaseStatus.DRAFTED,
      },
      isDeletingLease: false,
      handleDeleteLease: jest.fn(),
      refetchQueries: [],
      applicationStatus: ApplicationStatus.OFFER_GENERATED,
    }
  ) =>
    mount(
      <HashRouter>
        <BerthOfferCard {...props} />
      </HashRouter>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
