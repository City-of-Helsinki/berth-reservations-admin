import { HarborOption } from '../types';
import { SWITCH_BERTH_HARBORS } from '../__generated__/SWITCH_BERTH_HARBORS';

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

export const mockSwitchBerthHarbors: SWITCH_BERTH_HARBORS = {
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
