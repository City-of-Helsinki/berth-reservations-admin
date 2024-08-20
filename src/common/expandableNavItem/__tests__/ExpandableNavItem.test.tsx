import React from 'react';
import { mount } from 'enzyme';
import ExpandableNavItem, { ExpandableProps } from '../ExpandableNavItem';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: () => ({
    pathname: '/applications',
  }),
}));

describe('ExpandableNavItem', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const getWrapper = (props?: Partial<ExpandableProps>) =>
    mount(
      <ExpandableNavItem label="Click me" onClick={onClick} {...props}>
        <div>one</div>
        <div>two</div>
      </ExpandableNavItem>
    );

  it('renders normally', () => {
    expect(getWrapper().render()).toMatchSnapshot();
  });

  it('calls the supplied onClick when the item is clicked', () => {
    const item = getWrapper().find('.expandableNavItem');
    item.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('opens automatically if the current location matches its "openOn" prop', () => {
    const wrapper = getWrapper({ openOn: ['/applications'] });

    expect(wrapper.find('div.children.expanded').length).toBe(1);
  });

  it('does not open automatically if the current location does not match its "openOn" prop', () => {
    const wrapper = getWrapper({ openOn: ['/quesadillas'] });

    expect(wrapper.find('div.children.expanded').length).toBe(0);
  });
});
