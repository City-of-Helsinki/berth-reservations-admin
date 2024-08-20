import React from 'react';
import { mount } from 'enzyme';
import ReactModal from 'react-modal';
import { MockedProvider } from '@apollo/react-testing';
import InvoiceModal, { InvoiceModalProps } from '../InvoiceModal';
import BerthContractDetails from '../../../contractDetails/BerthContractDetailsContainer';
import { mockInvoices } from '../../__fixtures__/mockData';
import Button from '../../../../common/button/Button';

const actions: InvoiceModalProps['actions'] = {
  sendOffer: {
    state: false,
    value: 1,
    label: 'send offer',
    disabled: false,
    onSelect: jest.fn(),
  },
  cancelInvoice: {
    state: false,
    value: 2,
    label: 'cancel invoice',
    disabled: false,
    onSelect: jest.fn(),
  },
  markAsPaid: {
    state: false,
    value: 3,
    label: 'mark as paid',
    disabled: false,
    onSelect: jest.fn(),
  },
  refund: {
    state: false,
    value: 4,
    label: 'refund',
    disabled: false,
    onSelect: jest.fn(),
  },
};

describe('InvoiceModal', () => {
  ReactModal.setAppElement('body');
  const initialProps: InvoiceModalProps = { isOpen: true, invoice: mockInvoices[0], actions, selectedAction: 1 };

  const getWrapper = (props: Partial<InvoiceModalProps> = {}) =>
    mount(
      <MockedProvider>
        <InvoiceModal {...initialProps} {...props} />
      </MockedProvider>
    );

  it('renders correctly', () => {
    ReactModal.setAppElement('body');
    const wrapper = getWrapper();

    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders contract details component', () => {
    ReactModal.setAppElement('body');
    const wrapper = getWrapper();

    expect(wrapper.find(BerthContractDetails).exists()).toBeTruthy();
  });

  it('calls toggleModal method on button close click', async () => {
    ReactModal.setAppElement('body');
    const toggleModalMock = jest.fn();
    const wrapper = getWrapper({ toggleModal: toggleModalMock });

    wrapper.find(Button).simulate('click');
    expect(toggleModalMock).toBeCalledWith(false);
  });
});
