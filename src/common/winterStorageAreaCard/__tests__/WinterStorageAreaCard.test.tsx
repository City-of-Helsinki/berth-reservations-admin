import React from 'react';
import { shallow } from 'enzyme';
import WinterStorageAreaCard from '../WinterStorageAreaCard';

describe('WinterStorageAreaCard', () => {
  it('renders correctly with minimum props', () => {
    const wrapper = shallow(
      <WinterStorageAreaCard
        properties={{
          electricity: false,
          gate: false,
          numberOfCustomers: 0,
          summerStorageForBoats: false,
          summerStorageForDockingEquipment: false,
          summerStorageForTrailers: false,
          water: false,
        }}
        imageFile={null}
        municipality={null}
        name={'name'}
        streetAddress={null}
        wwwUrl={'https://www.hel.fi'}
        zipCode={'00000'}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders correctly with all props', () => {
    const wrapper = shallow(
      <WinterStorageAreaCard
        className={'test'}
        properties={{
          electricity: true,
          gate: true,
          numberOfCustomers: 0,
          summerStorageForBoats: true,
          summerStorageForDockingEquipment: true,
          summerStorageForTrailers: true,
          water: true,
        }}
        imageFile={'https://www.hel.fi'}
        municipality={'municipality'}
        name={'name'}
        streetAddress={'street'}
        wwwUrl={'https://www.hel.fi'}
        zipCode={'00000'}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
