import React from 'react';

import HarborDetails from './HarborDetails';
import { HarborData } from '../../harborUtils';

export default {
  component: HarborDetails,
  title: 'HarborDetails',
};

type Props = {
  imageFile: HarborData['imageFile'];
  streetAddress: HarborData['streetAddress'];
  zipCode: HarborData['zipCode'];
  municipality: HarborData['municipality'];
  wwwUrl: HarborData['wwwUrl'];
  servicemapId: HarborData['servicemapId'];
  maximumWidth: HarborData['maximumWidth'];
};

const dummyProps: Props = {
  imageFile: '',
  streetAddress: '',
  zipCode: '',
  municipality: '',
  wwwUrl: '',
  servicemapId: '',
  maximumWidth: 0,
};

export const harborDetails = () => (
  <HarborDetails {...dummyProps}>test</HarborDetails>
);

harborDetails.story = {
  name: 'Default',
};
