import React from 'react';
import { mount } from 'enzyme';
import { Form, Formik } from 'formik';

import WinterStorageFields from '../WinterStorageFields';
import { WinterStoragePrice } from '../../../winterStoragePricing/WinterStoragePricing';
import { PeriodType } from '../../../../../@types/__generated__/globalTypes';

describe('WinterStorageFields', () => {
  const mockValues: WinterStoragePrice = {
    id: '1',
    area: 'Kaisaniemi',
    privateCustomer: 8.5,
    company: 17,
    period: PeriodType.SEASON,
    productId: 'debc3311-675e-41db-8666-877d10842aab',
  };

  const getWrapper = () =>
    mount(
      <Formik initialValues={mockValues} onSubmit={jest.fn()} validate={jest.fn()}>
        {() => (
          <Form>
            <WinterStorageFields />
          </Form>
        )}
      </Formik>
    ).find(WinterStorageFields);

  it('renders normally', () => {
    const wrapper = getWrapper();
    expect(wrapper.render()).toMatchSnapshot();
  });

  describe('Area field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('input#area');
      expect(input.prop('value')).toEqual('Kaisaniemi');
    });
  });

  describe('Private customer field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('input#privateCustomer');
      expect(input.prop('value')).toEqual(8.5);
    });
  });

  describe('Company (customer) field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('input#company');
      expect(input.prop('value')).toEqual(17);
    });
  });

  describe('Period field', () => {
    it('Should show provided initialValue', () => {
      const input = getWrapper().find('Select').at(0);
      expect(input.prop('id')).toEqual('period');
      expect(input.prop('value')).toEqual('SEASON');
    });
  });
});
