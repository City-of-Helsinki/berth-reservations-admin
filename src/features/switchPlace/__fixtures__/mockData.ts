import { HarborOption } from '../types';
import { SWITCH_PLACE_HARBORS } from '../__generated__/SWITCH_PLACE_HARBORS';
import { SWITCH_PLACE_BERTH_LEASE } from '../__generated__/SWITCH_PLACE_BERTH_LEASE';

export const mockOption1: HarborOption = {
  label: 'Aataminsatama',
  value: '3',
};

export const mockOption2: HarborOption = {
  label: 'Albertinsatama',
  value: '2',
};

export const mockOption3: HarborOption = {
  label: 'Bertansatama',
  value: '4',
};

export const mockOption4: HarborOption = {
  label: 'Zorronsatama',
  value: '1',
};

export const mockSwitchPlaceHarbors: SWITCH_PLACE_HARBORS = {
  harbors: {
    __typename: 'HarborNodeConnection',
    edges: [
      {
        __typename: 'HarborNodeEdge',
        node: {
          __typename: 'HarborNode',
          id: '1',
          properties: { __typename: 'HarborProperties', name: 'Zorronsatama' },
        },
      },
      {
        __typename: 'HarborNodeEdge',
        node: {
          __typename: 'HarborNode',
          id: '2',
          properties: { __typename: 'HarborProperties', name: 'Albertinsatama' },
        },
      },
      {
        __typename: 'HarborNodeEdge',
        node: {
          __typename: 'HarborNode',
          id: '3',
          properties: { __typename: 'HarborProperties', name: 'Aataminsatama' },
        },
      },
      {
        __typename: 'HarborNodeEdge',
        node: {
          __typename: 'HarborNode',
          id: '4',
          properties: { __typename: 'HarborProperties', name: 'Bertansatama' },
        },
      },
    ],
  },
};

export const mockSwitchPlaceBerthLease: SWITCH_PLACE_BERTH_LEASE = {
  berthLease: {
    __typename: 'BerthLeaseNode',
    boat: {
      __typename: 'BoatNode',
      boatType: { id: '2', name: 'Soutuvene', __typename: 'BoatTypeType' },
      draught: 0.5,
      id: 'MOCK-BOAT',
      length: 3,
      model: 'MODEL',
      name: 'BOAT',
      registrationNumber: '',
      weight: 100,
      width: 1,
    },
    id: 'MOCK-LEASE',
  },
};
