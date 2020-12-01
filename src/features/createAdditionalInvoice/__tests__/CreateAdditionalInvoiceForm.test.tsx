import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import CreateAdditionalInvoiceForm, { CreateAdditionalInvoiceProps } from '../CreateAdditionalInvoiceForm';
import { BerthLease } from '../../customerView/types';
import { AdditionalService } from '../../pricing/additionalServicePricing/AdditionalServicePricing';
import {
  AdditionalProductTaxEnum,
  PeriodType,
  PriceUnits,
  ProductServiceType,
} from '../../../@types/__generated__/globalTypes';

describe('CreateAdditionalInvoiceForm', () => {
  const lease: BerthLease = {
    berthNum: 1,
    endDate: '',
    harbor: null,
    startDate: '',
    id: '123',
    isActive: true,
    pierIdentifier: null,
  };

  const product: AdditionalService = {
    id: '123',
    service: ProductServiceType.DINGHY_PLACE,
    priceValue: 10,
    priceUnit: PriceUnits.AMOUNT,
    period: PeriodType.SEASON,
    taxPercentage: AdditionalProductTaxEnum.TAX_24_00,
  };

  const props: CreateAdditionalInvoiceProps = {
    additionalProducts: [product, product],
    berthLeases: [lease, lease],
    email: 'foo@bar.com',
    onCancel: jest.fn(),
    onSubmit: jest.fn(),
  };

  const getWrapper = (props: CreateAdditionalInvoiceProps) =>
    mount(
      <HashRouter>
        <CreateAdditionalInvoiceForm {...props} />
      </HashRouter>
    );

  it('should enable submit', () => {
    const wrapper = getWrapper(props);
    expect(isSubmitEnabled(wrapper)).toEqual(true);
  });

  it('should disable submit when no email', () => {
    const noEmailProps = {
      ...props,
      email: null,
    };
    const wrapper = getWrapper(noEmailProps);
    expect(isSubmitEnabled(wrapper)).toEqual(false);
  });

  it('should disable submit when no leases', () => {
    const noEmailProps = {
      ...props,
      berthLeases: [],
    };
    const wrapper = getWrapper(noEmailProps);
    expect(isSubmitEnabled(wrapper)).toEqual(false);
  });
});

const isSubmitEnabled = (wrapper: ReactWrapper) =>
  !wrapper.find('.formActionButtons').find('Button').at(1).prop('disabled');
