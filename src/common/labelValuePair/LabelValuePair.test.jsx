import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LabelValuePair from './LabelValuePair';

const dummyProps = { label: 'dummyLabel', value: 'bar' };

describe('LabelValuePair', () => {
  const getWrapper = () => shallow(<LabelValuePair {...dummyProps} />);

  test('should render a wrapper with a className of "vene-label-value-pair"', () => {
    expect(getWrapper().find('div.vene-label-value-pair')).toHaveLength(1);
  });

  test('should pass the label to FormattedMessage', () => {
    const label = 'dummyLabel';
    const value = 'bar';

    expect(
      getWrapper({ label })
        .find(FormattedMessage)
        .prop('id')
    ).toBe(label);
  });
});
