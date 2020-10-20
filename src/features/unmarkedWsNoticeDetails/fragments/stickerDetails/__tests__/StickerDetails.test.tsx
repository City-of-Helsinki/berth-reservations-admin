import React from 'react';
import { mount } from 'enzyme';
import ReactModal from 'react-modal';

import StickerDetails from '../StickerDetails';
import LabelValuePair from '../../../../../common/labelValuePair/LabelValuePair';
import ButtonWithConfirmation from '../../../../../common/buttonWithConfirmation/buttonWithConfirmation';
import Button from '../../../../../common/button/Button';

describe('StickerDetails', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <StickerDetails stickerNumber={123} stickerSeason={'2020/2021'} handleAssignNewStickerNumber={jest.fn()} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders leading zeros', () => {
    const wrapper = mount(<StickerDetails stickerNumber={1} stickerSeason={'2020/2021'} />);
    expect(wrapper.find(LabelValuePair).first().text()).toContain('0001');
  });

  it('renders dash when stickerNumber is null', () => {
    const wrapper = mount(<StickerDetails stickerNumber={null} stickerSeason={'2020/2021'} />);
    expect(wrapper.find(LabelValuePair).first().text()).toContain('-');
  });

  it('renders assignment button when handleAssignNewStickerNumber is defined', () => {
    const wrapper = mount(
      <StickerDetails stickerNumber={123} stickerSeason={'2020/2021'} handleAssignNewStickerNumber={jest.fn()} />
    );
    expect(wrapper.find(ButtonWithConfirmation).length).toBe(1);
  });

  it('calls handleAssignNewStickerNumber when confirming', () => {
    ReactModal.setAppElement('body');
    const handleAssignNewStickerNumberMock = jest.fn();
    const wrapper = mount(
      <StickerDetails
        stickerNumber={123}
        stickerSeason={'2020/2021'}
        handleAssignNewStickerNumber={handleAssignNewStickerNumberMock}
      />
    );
    wrapper.find(ButtonWithConfirmation).simulate('click');
    wrapper.find(Button).last().simulate('click');
    expect(handleAssignNewStickerNumberMock).toBeCalledTimes(1);
  });
});
