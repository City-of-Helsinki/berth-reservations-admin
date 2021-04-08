import React from 'react';
import { shallow } from 'enzyme';

import SwitchPlaceButton, { SwitchPlaceButtonProps } from '../controls/SwitchPlaceButton';

const mockProps: SwitchPlaceButtonProps = {
  onClick: jest.fn(),
};

describe('SwitchPlaceButton', () => {
  const getWrapper = (props?: Partial<SwitchPlaceButtonProps>) =>
    shallow(<SwitchPlaceButton {...mockProps} {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
