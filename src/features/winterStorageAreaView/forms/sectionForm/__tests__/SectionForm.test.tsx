import React from 'react';
import { mount } from 'enzyme';
import SectionForm from '../SectionForm';

describe('features/winterStorageAreaView/SectionForm', () => {
  it('renders correctly', () => {
    const wrapper = mount(<SectionForm initialValues={{}} onSubmitText="Luo" />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
