import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from 'hds-react';
import ApplicationTableTools from '../ApplicationTableTools';

describe('ApplicationTableTools', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ApplicationTableTools count={1} onNameFilterChange={jest.fn()} onStatusFilterChange={jest.fn()} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls onNameFilterChange when text is typed into the name text input', () => {
    const nameToFilter = 'Testi Testinen';

    const onNameFilterChangeMock = jest.fn();
    const wrapper = shallow(
      <ApplicationTableTools count={1} onNameFilterChange={onNameFilterChangeMock} onStatusFilterChange={jest.fn()} />
    );

    wrapper.find(TextInput).simulate('change', { target: { value: nameToFilter } });
    expect(onNameFilterChangeMock).toBeCalledWith(nameToFilter);

    // Assert calls with undefined when empty string is input
    wrapper.find(TextInput).simulate('change', { target: { value: '' } });
    expect(onNameFilterChangeMock).toBeCalledWith(undefined);
  });
});
