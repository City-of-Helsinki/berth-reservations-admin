import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import CustomerForm from '../CustomerForm';
import { mockOrganizationCustomerFormValues, mockPrivateCustomerFormValues } from '../__fixtures__/mockData';
import { CustomerGroup } from '../../../@types/__generated__/globalTypes';

describe('CustomerForm', () => {
  const getWrapper = (props: {}) => mount(<CustomerForm {...props} />);
  const requiredFields = {
    [CustomerGroup.PRIVATE]: ['address', 'city', 'email', 'phone', 'firstName', 'lastName', 'postalCode'],
  };

  const checkRequiredFieldsValidationErrors = (
    wrapper: ReactWrapper,
    fields = requiredFields[CustomerGroup.PRIVATE]
  ) => {
    fields.forEach((field) => {
      expect(wrapper.find(`#${field}-helper`).text()).toBe('Tämä kenttä on pakollinen.');
    });
  };

  it('renders correctly with private customer profile', () => {
    const wrapper = getWrapper({ initialValues: mockPrivateCustomerFormValues });
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders correctly with organization customer profile', () => {
    const wrapper = getWrapper({ initialValues: mockOrganizationCustomerFormValues });
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('empty profile can not be submitted', async () => {
    const onSubmit = jest.fn();
    const wrapper = getWrapper({ onSubmit });
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    expect(onSubmit.mock.calls.length).toEqual(0);
    wrapper.update();
    checkRequiredFieldsValidationErrors(wrapper.find('form'));
  });

  it('private customer profile can be submitted', async () => {
    const onSubmit = jest.fn();
    const wrapper = getWrapper({ initialValues: mockPrivateCustomerFormValues, onSubmit });
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    expect(onSubmit.mock.calls.length).toEqual(1);
  });

  it('organization customer profile can be submitted', async () => {
    const onSubmit = jest.fn();
    const wrapper = getWrapper({ initialValues: mockOrganizationCustomerFormValues, onSubmit });
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    expect(onSubmit.mock.calls.length).toEqual(1);
  });
});
