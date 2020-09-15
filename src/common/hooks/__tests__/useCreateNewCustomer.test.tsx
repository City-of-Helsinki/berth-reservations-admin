import React, { useEffect } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import waitForExpect from 'wait-for-expect';
import { act } from 'react-dom/test-utils';

import useCreateNewCustomer, { CustomerInfo } from '../useCreateNewCustomer';
import { CREATE_BERTH_SERVICE_PROFILE_MUTATION } from '../../mutations/createProfile';
import {
  createOrganizationProfileMutationMock,
  createProfileMutationMock,
  customerInfoMock,
  organizationCustomerInfoMock,
  responseIdMock,
} from '../__fixtures__/useCreateNewCustomerMockData';
import { OrganizationType } from '../../../@types/__generated__/globalTypes';

const CallsCreateUser = ({ customerInfo }: { customerInfo: CustomerInfo }) => {
  const createNewCustomer = useCreateNewCustomer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => createNewCustomer(customerInfo), []);
  return null;
};

describe('useCreateNewCustomer', () => {
  beforeEach(() => {
    // Disable console.warn to silence MockedProvider from complaining about missing fields in result values.
    jest.spyOn(console, 'warn').mockImplementation(() => {
      /* NO-OP */
    });
  });

  it('calls createProfile and createBerthServicesProfile correctly', async () => {
    let createBerthServiceProfileCalled = false;
    const createCustomerProfileMutationMocks = [
      createProfileMutationMock,
      {
        request: { query: CREATE_BERTH_SERVICE_PROFILE_MUTATION, variables: { input: { id: responseIdMock } } },
        result: () => {
          createBerthServiceProfileCalled = true;
          return { data: {} };
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={createCustomerProfileMutationMocks}>
        <CallsCreateUser customerInfo={customerInfoMock} />
      </MockedProvider>
    );

    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(createBerthServiceProfileCalled).toBe(true);
      });
    });
  });

  it('calls createBerthServicesProfile with organization information when businessId is present', async () => {
    let createBerthServiceProfileCalled = false;
    const createOrganizationCustomerProfileMutationMocks = [
      createOrganizationProfileMutationMock,
      {
        request: {
          query: CREATE_BERTH_SERVICE_PROFILE_MUTATION,
          variables: {
            input: {
              id: responseIdMock,
              organization: {
                businessId: organizationCustomerInfoMock.businessId,
                name: organizationCustomerInfoMock.companyName,
                organizationType: OrganizationType.COMPANY,
                address: organizationCustomerInfoMock.address,
                postalCode: organizationCustomerInfoMock.zipCode,
                city: organizationCustomerInfoMock.municipality,
              },
            },
          },
        },
        result: () => {
          createBerthServiceProfileCalled = true;
          return { data: {} };
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={createOrganizationCustomerProfileMutationMocks}>
        <CallsCreateUser customerInfo={organizationCustomerInfoMock} />
      </MockedProvider>
    );

    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(createBerthServiceProfileCalled).toBe(true);
      });
    });
  });
});
