import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';
import { act } from 'react-dom/test-utils';

import BerthEditForm from '../BerthEditForm';
import { INDIVIDUAL_BERTH_QUERY } from '../queries';
import { UPDATE_BERTH_MUTATION } from '../mutations';
import LoadingSpinner from '../../../../../common/spinner/LoadingSpinner';
import { BerthMooringType, PriceTier } from '../../../../../@types/__generated__/globalTypes';
import { Pier } from '../../../types';

const pierOptions: Pier[] = [
  {
    id: 'a',
    identifier: 'A',
    electricity: true,
    wasteCollection: true,
    water: true,
    lighting: true,
    gate: true,
    priceTier: PriceTier.TIER_1,
    suitableBoatTypes: [],
  },
];
const queryMock = {
  request: { query: INDIVIDUAL_BERTH_QUERY, variables: { id: 'a' } },
  result: {
    data: {
      berth: {
        __typename: 'BerthNode',
        id: 'MOCK-BERTH',
        number: '2',
        comment: '',
        isActive: true,
        pier: {
          __typename: 'PierNode',
          id: pierOptions[0].id,
          properties: {
            __typename: 'PierProperties',
            identifier: pierOptions[0].identifier,
          },
        },
        mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
        width: 2.25,
        length: 5,
        depth: 1,
      },
    },
  },
};

describe('features/harborView/BerthEditForm', () => {
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
        <BerthEditForm berthId="a" pierOptions={pierOptions} />
      </MockedProvider>
    );
    expect(wrapper.contains(<LoadingSpinner />)).toBeTruthy();
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders content after loading', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[queryMock]}>
        <BerthEditForm berthId="a" pierOptions={pierOptions} />
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
        query: UPDATE_BERTH_MUTATION,
        variables: {
          input: {
            id: 'a',
            number: '2',
            pierId: pierOptions[0].id,
            width: 2.25,
            length: 5,
            depth: 1,
            mooringType: 'SINGLE_SLIP_PLACE',
            comment: '',
            isActive: true,
          },
        },
      },
      result: () => {
        updateMockCalled = true;
        return {
          data: { updateBerth: { clientMutationId: '-', __typename: 'ID' } },
        };
      },
    };
    const wrapper = mount(
      // We need queryMock twice here, because MockedProvider requires an
      // instance for each query made and the original query is refetched after updates.
      <MockedProvider mocks={[queryMock, queryMock, updateMock]}>
        <BerthEditForm berthId="a" onSubmit={onUpdateMock} pierOptions={pierOptions} />
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
