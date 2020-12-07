import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import InvoiceCard, { InvoiceCardProps } from '../InvoiceCard';
import { ApplicationStatus, LeaseStatus } from '../../../@types/__generated__/globalTypes';

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
    },
    placeType: 'place type',
    placeName: 'place name',
    placeProperties: [],
    title: 'title',
    leaseStatus: LeaseStatus.DRAFTED,
    applicationStatus: ApplicationStatus.OFFER_GENERATED,
  };

  const getWrapper = (props: InvoiceCardProps) => mount(<InvoiceCard {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper(defaultProps);
    expect(wrapper.render()).toMatchSnapshot();
  });

  describe('send button', () => {
    const findSendButton = (wrapper: ReactWrapper) => wrapper.find('.buttonRow').find('div').find('button');

    it('is not displayed when application status not "generated" or "sent"', () => {
      Object.values(ApplicationStatus)
        .filter((status) => status !== ApplicationStatus.OFFER_GENERATED && status !== ApplicationStatus.OFFER_SENT)
        .forEach((status) => {
          const wrapper = getWrapper({ ...defaultProps, applicationStatus: status });
          expect(findSendButton(wrapper).length).toBe(0);
        });
    });

    it('is displayed and enabled when application status is "generated"', () => {
      const wrapper = getWrapper({ ...defaultProps, applicationStatus: ApplicationStatus.OFFER_GENERATED });
      const sendButton = findSendButton(wrapper);
      expect(sendButton.length).toBe(1);
      expect(sendButton.props().disabled).toBeFalsy();
    });

    it('is displayed but disabled when application status is "sent"', () => {
      const wrapper = getWrapper({ ...defaultProps, applicationStatus: ApplicationStatus.OFFER_SENT });
      const sendButton = findSendButton(wrapper);
      expect(sendButton.length).toBe(1);
      expect(sendButton.props().disabled).toBeTruthy();
    });

    it('calls sendInvoice on click', () => {
      const sendInvoiceMock = jest.fn();
      const wrapper = getWrapper({
        ...defaultProps,
        applicationStatus: ApplicationStatus.OFFER_GENERATED,
        sendInvoice: sendInvoiceMock,
      });
      const sendButton = findSendButton(wrapper);
      sendButton.simulate('click');
      expect(sendInvoiceMock).toBeCalledTimes(1);
    });
  });
});
