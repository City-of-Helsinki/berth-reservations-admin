import React from 'react';
import { shallow } from 'enzyme';

import SelectHeader, { SelectHeaderProps } from '../SelectHeader';

type TestType = {
  foo: string;
  bar: string;
};

const minimumProps: SelectHeaderProps<TestType> = {
  allLabel: 'All',
  editLabel: 'Edit',
  equals: jest.fn((a: unknown, b: unknown) => (a as TestType).foo === (b as TestType).foo),
  formatter: jest.fn((item: unknown) => `${(item as TestType).foo} ${(item as TestType).bar}`),
  items: [
    {
      foo: 'floof',
      bar: 'bark',
    },
    {
      foo: 'fun',
      bar: 'bartender',
    },
  ],
  onSelect: jest.fn((item: unknown) => undefined),
};

describe('SelectHeader', () => {
  const getWrapper = (props?: Partial<SelectHeaderProps<TestType>>) =>
    shallow(<SelectHeader {...minimumProps} {...props} />);

  it('renders normally with minimum props', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally with all props', () => {
    const wrapper = getWrapper({
      className: 'test',
      selectedItem: {
        foo: 'floof',
        bar: 'bark',
      },
      onEdit: jest.fn(),
      onSelect: jest.fn(),
      renderer: jest.fn((item) => (
        <div>
          {item.foo} {item.bar}
        </div>
      )),
    });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('clicking All calls onSelect with "null"', () => {
    const onSelect = jest.fn();
    const wrapper = getWrapper({
      onSelect,
    });

    wrapper.find('button').at(0).simulate('click');

    expect(onSelect).toHaveBeenCalledWith(null);
  });

  it('clicking the button for the first item calls onSelect with it', () => {
    const onSelect = jest.fn();
    const wrapper = getWrapper({
      onSelect,
    });

    wrapper.find('button').at(1).simulate('click');

    expect(onSelect).toHaveBeenCalledWith({
      foo: 'floof',
      bar: 'bark',
    });
  });

  it('clicking the button for the first item calls onSelect with it', () => {
    const onEdit = jest.fn();
    const wrapper = getWrapper({
      onEdit,
      selectedItem: {
        foo: 'floof',
        bar: 'bark',
      },
    });

    wrapper.find('button').at(3).simulate('click');

    expect(onEdit).toHaveBeenCalledWith({
      foo: 'floof',
      bar: 'bark',
    });
  });
});
