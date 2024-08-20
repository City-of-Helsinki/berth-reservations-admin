import React from 'react';
import { shallow } from 'enzyme';
import WinterStoragePlaceTableTools from '../WinterStoragePlaceTableTools';

describe('WinterStorageAreaTableTools', () => {
  const getWrapper = () =>
    shallow(
      <WinterStoragePlaceTableTools
        onAddSection={jest.fn()}
        onAddPlace={jest.fn()}
        handleGlobalFilter={jest.fn()}
        canAddPlace={true}
      />
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
