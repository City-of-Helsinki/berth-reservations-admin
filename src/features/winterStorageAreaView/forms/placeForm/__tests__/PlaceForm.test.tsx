import React from 'react';
import { mount } from 'enzyme';

import PlaceForm from '../PlaceForm';
import { WinterStorageSection } from '../../../types';

const sectionOptions = [{ id: 'a', identifier: 'A' }] as WinterStorageSection[];
const validValues = {
  numer: 0,
  isActive: true,
  width: 3,
  length: 3,
  winterStorageSection: sectionOptions[0].identifier,
  winterStorageSectionId: sectionOptions[0].id,
};

describe('features/winterStorageAreaView/PlaceForm', () => {
  it('renders correctly', () => {
    const wrapper = mount(<PlaceForm initialValues={validValues} sectionOptions={sectionOptions} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
