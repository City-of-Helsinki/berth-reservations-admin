import React from 'react';
import { mount } from 'enzyme';
import ReactModal from 'react-modal';

import ApplicationHeader from '../ApplicationHeader';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';

describe('ApplicationHeader', () => {
  beforeEach(() => {
    ReactModal.setAppElement('body');
  });

  it('renders correctly', () => {
    const wrapper = mount(
      <ApplicationHeader
        text={'text'}
        createdAt={new Date(0).toISOString()}
        status={ApplicationStatus.PENDING}
        handleUnlinkCustomer={jest.fn()}
        handleDeleteApplication={jest.fn()}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
