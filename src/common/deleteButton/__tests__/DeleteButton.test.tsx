import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReactModal from 'react-modal';

import DeleteButton, { DeleteButtonProps } from '../DeleteButton';
import ConfirmationModal from '../../confirmationModal/ConfirmationModal';
import Button from '../../button/Button';

describe('DeleteButton', () => {
  // Silence react-modal errors
  beforeEach(() => {
    ReactModal.setAppElement('body');
  });

  const defaultProps = {
    buttonText: 'button',
    onConfirm: jest.fn(),
  };
  const getWrapper = (props: DeleteButtonProps) => mount(<DeleteButton {...props} />);

  const clickDelete = (wrapper: ReactWrapper) => wrapper.find(Button).simulate('click');
  const clickConfirm = (wrapper: ReactWrapper) => wrapper.find(ConfirmationModal).find(Button).last().simulate('click');
  const clickCancel = (wrapper: ReactWrapper) => wrapper.find(ConfirmationModal).find(Button).first().simulate('click');

  it('renders normally', () => {
    const wrapper = getWrapper(defaultProps);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('assigns the buttonClassName prop to the main button', () => {
    const buttonClassName = 'test';
    const wrapper = getWrapper({ ...defaultProps, buttonClassName });
    expect(wrapper.find(Button).props().className).toBe(buttonClassName);
  });

  it('assigns the modalClassName prop to the modal', () => {
    const modalClassName = 'test';
    const wrapper = getWrapper({ ...defaultProps, modalClassName });
    expect(wrapper.find(ConfirmationModal).props().className).toBe(modalClassName);
  });

  it('renders correctly when modal open', () => {
    const wrapper = getWrapper(defaultProps);
    clickDelete(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('opens confirmation modal on click', () => {
    const wrapper = getWrapper(defaultProps);
    clickDelete(wrapper);
    expect(wrapper.find(ConfirmationModal).props().isOpen).toBeTruthy();
  });

  it('closes confirmation modal on cancel click', () => {
    const wrapper = getWrapper(defaultProps);
    clickDelete(wrapper);
    clickCancel(wrapper);
    expect(wrapper.find(ConfirmationModal).props().isOpen).toBeFalsy();
  });

  it('calls onConfirm when confirmation modal is clicked', () => {
    const onConfirmMock = jest.fn();
    const wrapper = getWrapper({ ...defaultProps, onConfirm: onConfirmMock });
    clickDelete(wrapper);
    clickConfirm(wrapper);
    expect(onConfirmMock).toBeCalledTimes(1);
  });

  it('closes modal after confirmation', () => {
    const wrapper = getWrapper(defaultProps);
    clickDelete(wrapper);
    clickConfirm(wrapper);
    expect(wrapper.find(ConfirmationModal).props().isOpen).toBeFalsy();
  });
});
