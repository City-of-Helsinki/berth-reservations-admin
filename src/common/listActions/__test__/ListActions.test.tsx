import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ListActions from '../ListActions';
import Button from '../../button/Button';

describe('ListActions', () => {
  const defaultListActions = [{ id: 'id', label: 'label', buttonText: 'button text', onClick: jest.fn() }];

  const selectOption = (wrapper: ReactWrapper, option: number) => {
    wrapper.find('button').simulate('click');
    wrapper.find('li').at(option).simulate('click');
  };

  it('renders normally', () => {
    const wrapper = mount(
      <ListActions selectedRows={[]} listActions={defaultListActions} resetSelectedRows={jest.fn()} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('does not display any button when no list action is selected', () => {
    const wrapper = mount(<ListActions selectedRows={[]} listActions={[]} resetSelectedRows={jest.fn()} />);
    expect(wrapper.find(Button).length).toBe(0);
  });

  it('displays disabled button when selection is empty', () => {
    const wrapper = mount(
      <ListActions selectedRows={[]} listActions={defaultListActions} resetSelectedRows={jest.fn()} />
    );

    selectOption(wrapper, 1);

    expect(wrapper.find(Button).first().props().disabled).toBe(true);
  });

  it('displays action button when selection is not empty', () => {
    const wrapper = mount(
      <ListActions selectedRows={['a']} listActions={defaultListActions} resetSelectedRows={jest.fn()} />
    );

    selectOption(wrapper, 1);

    expect(wrapper.find(Button).first().props().disabled).toBe(false);
    expect(wrapper.find(Button).first().text()).toContain(defaultListActions[0].buttonText);
  });

  it("calls selected listAction's onClick method with selectedRows", () => {
    const onClickMock = jest.fn();
    const selectedRows = ['a'];
    const listActions = [{ ...defaultListActions[0], onClick: onClickMock }];

    const wrapper = mount(
      <ListActions selectedRows={selectedRows} listActions={listActions} resetSelectedRows={jest.fn()} />
    );

    selectOption(wrapper, 1);
    wrapper.find(Button).first().simulate('click');

    expect(onClickMock).toBeCalledWith(selectedRows);
  });
});
