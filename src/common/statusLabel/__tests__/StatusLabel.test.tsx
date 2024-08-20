import React from 'react';
import { shallow } from 'enzyme';
import StatusLabel, { StatusLabelProps } from '../StatusLabel';

describe('StatusLabel', () => {
  const getWrapper = (props: StatusLabelProps = { label: 'Foo', type: 'alert' }) => shallow(<StatusLabel {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
