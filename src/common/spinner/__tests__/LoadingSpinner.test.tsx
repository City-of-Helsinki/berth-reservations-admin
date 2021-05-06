import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  const getWrapper = () => shallow(<LoadingSpinner />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
