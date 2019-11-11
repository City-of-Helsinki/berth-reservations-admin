import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('Link', () => {
  const getWrapper = props => shallow(<Link {...props} />);

  it('renders noramlly', () => {
    const wrapper = getWrapper({ children: 'test' });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should add the supplied color prop as a className', () => {
    const linkColor = 'primary';
    const wrapper = getWrapper({ children: 'test', linkColor });
    expect(wrapper.hasClass(linkColor)).toBe(true);
  });
});
