import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import AdditionalServicesModal, { AdditionalServicesModalProps } from '../AdditionalServicesModal';
import {
  ProductServiceType,
  PeriodType,
  AdditionalProductTaxEnum,
  PriceUnits,
} from '../../../../../@types/__generated__/globalTypes';

describe('AdditionalServicesModal', () => {
  const initialProps: AdditionalServicesModalProps = {
    closeModal: jest.fn(),
    onSubmit: jest.fn(),
    periodOptions: Object.values(PeriodType),
    initialValues: {
      service: ProductServiceType.LIGHTING,
      priceValue: 25,
      priceUnit: PriceUnits.AMOUNT,
      taxPercentage: AdditionalProductTaxEnum.TAX_24_00,
      period: PeriodType.SEASON,
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const getWrapper = (props: Partial<AdditionalServicesModalProps> = {}) =>
    mount(<AdditionalServicesModal {...initialProps} {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();
    expect(wrapper.render()).toMatchSnapshot();
  });

  describe('Service field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('Select#service');
      expect(input.prop('value')).toEqual('LIGHTING');
    });
  });

  describe('Price Value field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('input#priceValue');
      expect(input.prop('value')).toEqual(25);
    });
  });

  describe('Price Unit field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('Select#priceUnit');
      expect(input.prop('value')).toEqual('AMOUNT');
    });
  });

  describe('Tax Percentage field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('Select#taxPercentage');
      expect(input.prop('value')).toEqual('TAX_24_00');
    });
  });

  describe('Period field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('Select#period');
      expect(input.prop('value')).toEqual('SEASON');
    });
  });

  describe('Modal buttons', () => {
    it('Should call the provided closeModal prop when cancel button is clicked', () => {
      const cancelBtn = getWrapper().find('Button').at(0);
      cancelBtn.simulate('click');

      expect(initialProps.closeModal).toHaveBeenCalledTimes(1);
    });
    it('Should call the provided onSubmit prop with modal values when the form is submitted', async () => {
      const initialValues: AdditionalServicesModalProps['initialValues'] = {
        priceValue: 50,
        service: ProductServiceType.LIGHTING,
        priceUnit: PriceUnits.PERCENTAGE,
        taxPercentage: AdditionalProductTaxEnum.TAX_10_00,
        period: PeriodType.SEASON,
      };
      const submitBtn = getWrapper({ initialValues });

      await act(async () => {
        submitBtn.simulate('submit');
      });

      expect(initialProps.onSubmit).toHaveBeenNthCalledWith(1, initialValues, expect.anything());
    });
  });
});
