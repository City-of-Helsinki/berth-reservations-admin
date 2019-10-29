import React from 'react';
import { IntlProvider } from 'react-intl';

import LabelValuePair from './LabelValuePair';

export default {
  component: LabelValuePair,
  title: 'LabelValuePair',
};

const dummyProps = { label: 'foo', value: 'bar' };

export const plain = () => (
  <IntlProvider locale="fi">
    <LabelValuePair {...dummyProps} />
  </IntlProvider>
);
