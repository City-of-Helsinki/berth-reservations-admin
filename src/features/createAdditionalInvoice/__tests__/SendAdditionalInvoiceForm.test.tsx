import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import SendAdditionalInvoiceForm, { SendAdditionalInvoiceFormProps } from '../SendAdditionalInvoiceForm';
import { createdOrderMock } from '../__fixtures__/mockData';
import { InvoiceInstructions } from '../../../common/invoiceInstructions/InvoiceInstructions';

describe('SendAdditionalInvoiceForm', () => {
  const props: SendAdditionalInvoiceFormProps = {
    email: 'foo@bar.com',
    order: createdOrderMock,
    onCancel: jest.fn,
    onSubmit: jest.fn,
  };

  const getWrapper = (props: SendAdditionalInvoiceFormProps) =>
    mount(
      <HashRouter>
        <SendAdditionalInvoiceForm {...props} />
      </HashRouter>
    );

  it('should render basic data', () => {
    const wrapper = getWrapper(props);

    expect(wrapper.contains(<InvoiceInstructions email={props.email} />)).toBeTruthy();

    const totalPriceHtml = wrapper.find('LabelValuePair.totalPrice').html();
    expect(totalPriceHtml.includes(props.order?.totalPrice));

    const submitEnabled = !wrapper.find('.formActionButtons').find('Button').at(1).prop('disabled');
    expect(submitEnabled).toEqual(true);
  });
});
