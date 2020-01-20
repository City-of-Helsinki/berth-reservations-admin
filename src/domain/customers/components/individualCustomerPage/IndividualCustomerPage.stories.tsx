import React from 'react';

import IndividualCustomerPage from './IndividualCustomerPage';

export default {
  component: IndividualCustomerPage,
  title: 'individualCustomerPage',
};

const dummyData = {
  profile: {
    firstName: 'foo',
    lastName: 'foo',
    primaryAddress: null,
    primaryEmail: null,
    comment: null,
  },
};

export const individualCustomerPage = () => (
  <IndividualCustomerPage data={dummyData} />
);

individualCustomerPage.story = {
  name: 'Default',
};
