import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

describe('Box', () => {
  const getWrapper = () => shallow(<Box>Content</Box>);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
