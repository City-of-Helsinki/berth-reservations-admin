import React from 'react';
import { mount } from 'enzyme';
import ReactModal from 'react-modal';

import InvoiceModal from '../InvoiceModal';
import { mockInvoices } from '../../__fixtures__/mockData';

describe('InvoiceModal', () => {
  ReactModal.setAppElement('body');

  it('renders correctly', () => {
    ReactModal.setAppElement('body');
    const wrapper = mount(<InvoiceModal isOpen invoice={mockInvoices[0]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls toggleModal method on button close click', () => {
    ReactModal.setAppElement('body');
    const toggleModalMock = jest.fn();
    const wrapper = mount(<InvoiceModal isOpen invoice={mockInvoices[0]} toggleModal={toggleModalMock} />);
    wrapper.find('button').simulate('click');
    expect(toggleModalMock).toBeCalledWith(false);
  });
});
