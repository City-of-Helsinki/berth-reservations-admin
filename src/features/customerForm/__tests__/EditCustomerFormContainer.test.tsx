import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';

import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import { CUSTOMER_FORM_QUERY } from '../queries';
import { mockPrivateCustomerProfile } from '../__fixtures__/mockData';
import EditCustomerFormContainer from '../EditCustomerFormContainer';
import { UPDATE_BERTH_SERVICES_PROFILE_MUTATION, UPDATE_PROFILE_MUTATION } from '../mutations';
import { createUpdateInputs, getCustomerFormValues, getIdentifiers } from '../utils';

const queryMock = {
  request: { query: CUSTOMER_FORM_QUERY, variables: { id: 'MOCK-PROFILE' } },
  result: {
    data: {
      profile: mockPrivateCustomerProfile,
    },
  },
};

describe('EditCustomerForm', () => {
  const waitForContent = async (wrapper: ReactWrapper) => {
    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(wrapper.contains(<LoadingSpinner isLoading={true} />)).toBeFalsy();
      });
    });
  };

  it('initially renders loading spinner', () => {
    const wrapper = mount(
      <MockedProvider mocks={[queryMock]}>
        <EditCustomerFormContainer customerId={'MOCK-PROFILE'} />
      </MockedProvider>
    );
    expect(wrapper.contains(<LoadingSpinner isLoading={true} />)).toBe(true);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders content after loading', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[queryMock]}>
        <EditCustomerFormContainer customerId={'MOCK-PROFILE'} onSubmit={jest.fn()} onCancel={jest.fn()} />
      </MockedProvider>
    );
    await waitForContent(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls update mutations on save', async () => {
    const [updateProfileInput, updateBerthServicesInput] = createUpdateInputs(
      getCustomerFormValues(mockPrivateCustomerProfile),
      getIdentifiers(mockPrivateCustomerProfile)
    );

    let updateProfileMockCalled = false;
    const updateProfileMock = {
      request: {
        query: UPDATE_PROFILE_MUTATION,
        variables: {
          input: updateProfileInput,
        },
      },
      result: () => {
        updateProfileMockCalled = true;
        return {
          data: {
            updateProfile: { clientMutationId: '-', __typename: 'ID' },
          },
        };
      },
    };

    let updateBerthServicesProfileMockCalled = false;
    const updateBerthServicesProfileMock = {
      request: {
        query: UPDATE_BERTH_SERVICES_PROFILE_MUTATION,
        variables: {
          input: updateBerthServicesInput,
        },
      },
      result: () => {
        updateBerthServicesProfileMockCalled = true;
        return {
          data: {
            updateBerthServicesProfile: { clientMutationId: '-', __typename: 'ID' },
          },
        };
      },
    };

    const onSubmit = jest.fn();

    const wrapper = mount(
      // We need queryMock twice here, because MockedProvider requires an
      // instance for each query made and the original query is refetched after updates.
      <MockedProvider mocks={[queryMock, queryMock, updateProfileMock, updateBerthServicesProfileMock]}>
        <EditCustomerFormContainer customerId={'MOCK-PROFILE'} onSubmit={onSubmit} onCancel={jest.fn()} />
      </MockedProvider>
    );

    await waitForContent(wrapper);
    await act(async () => {
      wrapper.find('Form').simulate('submit');
      await waitForExpect(() => {
        wrapper.update();
        expect(onSubmit).toBeCalledTimes(1);
        expect(updateProfileMockCalled).toBe(true);
        expect(updateBerthServicesProfileMockCalled).toBe(true);
      });
    });
  });
});
