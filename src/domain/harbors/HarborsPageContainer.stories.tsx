import React from 'react';

import { HarborDetails } from './HarborsPageContainer';
import data from './__mocks__/mockdata';

export default {
  component: HarborDetails,
  title: 'HarborDetails',
};

export const sizes = () => (
  <>
    <HarborDetails data={data} />
  </>
);

