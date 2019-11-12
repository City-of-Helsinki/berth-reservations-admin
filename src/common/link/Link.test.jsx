import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('Link', () => {
  const getWrapper = props => shallow(<Link {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper({ children: 'test' });
    expect(wrapper.html()).toMatchSnapshot();
  });

});
