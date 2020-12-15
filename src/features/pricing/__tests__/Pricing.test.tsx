import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { HashRouter } from 'react-router-dom';

import Pricing, { PricingProps } from '../Pricing';
import { data as berthsData } from '../berthPricing/__fixtures__/data';
import { data as harborTiersData } from '../harborTiers/__fixtures__/data';
import { data as winterStorageData } from '../winterStoragePricing/__fixtures__/data';
import { data as harborServicesData } from '../harborServicePricing/__fixtures__/data';
import { data as additionalServicesData } from '../additionalServicePricing/__fixtures__/data';

const initialProps: PricingProps = {
  berthsData,
  harborTiersData,
  winterStorageData,
  harborServicesData,
  additionalServicesData,
  additionalServicesModal: {
    isModalOpen: false,
    editingServiceId: 'Bedfordshire',
    onAddServiceClick: jest.fn(),
    onEditRowClick: jest.fn(),
    onCloseModal: jest.fn(),
    onSubmitForm: jest.fn(),
  },
  loading: false,
};

describe('PricingPage', () => {
  const getWrapper = (props: Partial<PricingProps> = {}) =>
    mount(
      <HashRouter>
        <MockedProvider>
          <Pricing {...initialProps} {...props} />
        </MockedProvider>
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
