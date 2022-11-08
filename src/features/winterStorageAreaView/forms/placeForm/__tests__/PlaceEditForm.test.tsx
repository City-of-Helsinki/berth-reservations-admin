import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';
import { act } from 'react-dom/test-utils';

import PlaceEditForm from '../PlaceEditForm';
import { INDIVIDUAL_PLACE_QUERY } from '../queries';
import { UPDATE_PLACE_MUTATION } from '../mutations';
import LoadingSpinner from '../../../../../common/spinner/LoadingSpinner';
import { WinterStorageSection } from '../../../types';

const sectionOptions: WinterStorageSection[] = [
  {
    id: 'a',
    identifier: 'A',
  },
];
const queryMock = {
  request: { query: INDIVIDUAL_PLACE_QUERY, variables: { id: 'a' } },
  result: {
    data: {
      winterStoragePlace: {
        __typename: 'WinterStoragePlaceNode',
        id: 'MOCK-PLACE',
        number: '2',
        isActive: true,
        winterStorageSection: {
          __typename: 'WinterStorageSectionNode',
          id: sectionOptions[0].id,
          properties: {
            __typename: 'WinterStorageSectionProperties',
            identifier: sectionOptions[0].identifier,
          },
        },
        width: 2.25,
        length: 5,
      },
    },
  },
};

describe('features/winterStorageAreaView/PlaceEditForm', () => {
  const waitForContent = async (wrapper: ReactWrapper) => {
    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(wrapper.contains(<LoadingSpinner />)).toBeFalsy();
      });
    });
  };

  it('initially renders loading spinner', () => {
    const wrapper = mount(
      <MockedProvider mocks={[queryMock]}>
        <PlaceEditForm placeId="a" sectionOptions={sectionOptions} />
      </MockedProvider>
    );
    expect(wrapper.contains(<LoadingSpinner />)).toBeTruthy();
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders content after loading', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[queryMock]}>
        <PlaceEditForm placeId="a" sectionOptions={sectionOptions} />
      </MockedProvider>
    );
    await waitForContent(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls update mutation on save', async () => {
    let updateMockCalled = false;
    const onUpdateMock = jest.fn();
    const updateMock = {
      request: {
        query: UPDATE_PLACE_MUTATION,
        variables: {
          input: {
            id: 'a',
            width: 2.25,
            length: 5,
            isActive: true,
          },
        },
      },
      result: () => {
        updateMockCalled = true;
        return {
          data: { updateWinterStoragePlace: { clientMutationId: '-', __typename: 'ID' } },
        };
      },
    };
    const wrapper = mount(
      // We need queryMock twice here, because MockedProvider requires an
      // instance for each query made and the original query is refetched after updates.
      <MockedProvider mocks={[queryMock, queryMock, updateMock]}>
        <PlaceEditForm placeId="a" onSubmit={onUpdateMock} sectionOptions={sectionOptions} />
      </MockedProvider>
    );
    await waitForContent(wrapper);
    await act(async () => {
      wrapper.find('form').simulate('submit');
      await waitForExpect(() => {
        wrapper.update();
        expect(onUpdateMock).toBeCalledTimes(1);
        expect(updateMockCalled).toBe(true);
      });
    });
  });
});
