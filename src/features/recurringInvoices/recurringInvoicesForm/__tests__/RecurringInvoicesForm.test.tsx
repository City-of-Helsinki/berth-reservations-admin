import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import RecurringInvoicesForm, { RecurringInvoicesFormProps } from '../RecurringInvoicesForm';

const mockProps: RecurringInvoicesFormProps = {
  descriptionKey: 'recurringInvoices.form.descriptionBerths',
  isSubmitting: false,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

describe('RecurringInvoicesForm', () => {
  const mockDate: Date = new Date('2020-09-23T00:00:00.000Z');
  const dateSpy = jest.spyOn(global.Date, 'now').mockImplementation(() => mockDate.valueOf());

  const getWrapper = (props?: Partial<RecurringInvoicesFormProps>) =>
    mount(<RecurringInvoicesForm {...mockProps} {...props} />);

  afterAll(() => {
    dateSpy.mockRestore();
  });

  it('renders normally', () => {
    const wrapper = getWrapper();
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls onSubmit on submit', async () => {
    const onSubmit = jest.fn();
    const wrapper = getWrapper({ onSubmit });
    await act(async () => {
      wrapper.find('Form').simulate('submit');
    });
    expect(onSubmit).toHaveBeenCalledWith({ dueDate: '2020-10-07' });
  });

  it('disables submit button if isSubmitting is true', async () => {
    const wrapper = getWrapper({ isSubmitting: true });
    expect(wrapper.find('.formActionButtons').find('Button').at(1).prop('disabled')).toEqual(true);
  });
});
