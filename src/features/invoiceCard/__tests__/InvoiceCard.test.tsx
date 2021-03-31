import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import InvoiceCard, { InvoiceCardProps } from '../InvoiceCard';
import { LeaseStatus, OrderStatus } from '../../../@types/__generated__/globalTypes';

describe('InvoiceCard', () => {
  const defaultProps: InvoiceCardProps = {
    editAdditionalServices: jest.fn(),
    sendInvoice: jest.fn(),
    order: {
      id: 'id',
      orderNumber: '1234',
      price: 1,
      totalPrice: 2,
      fixedProducts: [],
      optionalProducts: [],
      status: OrderStatus.WAITING,
    },
    placeType: 'place type',
    placeName: 'place name',
    placeProperties: [],
    title: 'title',
    leaseStatus: LeaseStatus.DRAFTED,
  };

  const getWrapper = (props: InvoiceCardProps) => mount(<InvoiceCard {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper(defaultProps);
    expect(wrapper.render()).toMatchSnapshot();
  });

  describe('send button', () => {
    const findSendButton = (wrapper: ReactWrapper) => wrapper.find('.buttonRow').find('div').find('button');

    it('is not displayed when lease status not "DRAFTED" or "OFFERED"', () => {
      Object.values(LeaseStatus)
        .filter((status) => status !== LeaseStatus.DRAFTED && status !== LeaseStatus.OFFERED)
        .forEach((status) => {
          const wrapper = getWrapper({ ...defaultProps, leaseStatus: status });
          expect(findSendButton(wrapper).length).toBe(0);
        });
    });

    it('is displayed and enabled when lease status is "DRAFTED"', () => {
      const wrapper = getWrapper({ ...defaultProps, leaseStatus: LeaseStatus.DRAFTED });
      const sendButton = findSendButton(wrapper);
      expect(sendButton.length).toBe(1);
      expect(sendButton.props().disabled).toBeFalsy();
    });

    it('is displayed but with a different text when lease status is "OFFERED"', () => {
      const wrapper = getWrapper({ ...defaultProps, leaseStatus: LeaseStatus.OFFERED });
      const sendButton = findSendButton(wrapper);
      expect(sendButton.length).toBe(1);
      expect(sendButton.text()).toEqual('Lähetä tarjous uudelleen');
    });

    it('calls sendInvoice on click', () => {
      const sendInvoiceMock = jest.fn();
      const wrapper = getWrapper({
        ...defaultProps,
        leaseStatus: LeaseStatus.DRAFTED,
        sendInvoice: sendInvoiceMock,
      });
      const sendButton = findSendButton(wrapper);
      sendButton.simulate('click');
      expect(sendInvoiceMock).toBeCalledTimes(1);
    });
  });
});
