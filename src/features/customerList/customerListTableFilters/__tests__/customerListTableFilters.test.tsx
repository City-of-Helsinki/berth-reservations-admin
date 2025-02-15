/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import { MockedResponse } from '@apollo/react-testing';

import { render, screen, userEvent, waitFor, configure } from '../../../../common/testUtils/testingLibrary';
import { FILTER_OPTIONS, FILTER_OPTIONSVariables as FILTER_OPTIONS_VAR } from '../../__generated__/FILTER_OPTIONS';
import { FILTER_OPTIONS_QUERY } from '../../queries';
import CustomerListTableFilters from '../CustomerListTableFilters';

configure({ defaultHidden: true });

const boatType1 = { id: '1', name: 'Jollavene' };
const boatTypes = [boatType1, { id: '2', name: 'Keskimoottorivene' }];
const harbour2 = {
  node: {
    id: '2',
    properties: {
      name: 'Ainorannan venesamata B',
    },
  },
};
const harbors = {
  edges: [
    {
      node: {
        id: '1',
        properties: {
          name: 'Ainorannan venesamata A',
        },
      },
    },
    harbour2,
  ],
};
const pier1 = {
  node: {
    id: 'pier-1',
    properties: {
      identifier: 'A',
    },
  },
};
const piers = {
  edges: [
    pier1,
    {
      node: {
        id: 'pier-2',
        properties: {
          identifier: 'B',
        },
      },
    },
  ],
};
const berth1 = {
  node: {
    id: 'berth-1',
    number: '1',
  },
};
const berths = {
  edges: [
    berth1,
    {
      node: {
        id: 'berth-2',
        number: '2',
      },
    },
  ],
};
const gridWinterStorageArea = {
  node: {
    id: 'winterStorageArea-1',
    properties: {
      name: 'Laivalahti',
      estimatedNumberOfUnmarkedSpaces: 0,
    },
  },
};
const winterStorageArea2 = {
  node: {
    id: 'winterStorageArea-2',
    properties: {
      name: 'Hernesaari',
      estimatedNumberOfUnmarkedSpaces: 10,
    },
  },
};
const winterStorageAreas = {
  edges: [gridWinterStorageArea, winterStorageArea2],
};
const winterStorageGridAreaExpanded = {
  id: gridWinterStorageArea.node.id,
  properties: {
    sections: {
      edges: [
        {
          node: {
            id: 'section-1',
            properties: {
              identifier: 'Section-1',
              places: {
                edges: [
                  {
                    node: {
                      id: 'place-1',
                      number: 1,
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
};

function toggleFilters() {
  userEvent.click(screen.getByRole('button', { name: 'Rajaa' }));
}

function submitFilters() {
  userEvent.click(screen.getByRole('button', { name: 'Käytä' }));
}

type InstructionBase = {
  name: string;
  label: string;
};

type SelectTypeInstruction = InstructionBase & {
  type: 'multiselect' | 'select';
  value: string;
};

type CheckboxInstruction = InstructionBase & {
  type: 'checkbox';
};

type HDSDateInputInstruction = InstructionBase & {
  type: 'date';
  value: string;
};

type FieldInstruction = SelectTypeInstruction | CheckboxInstruction | HDSDateInputInstruction;

type SetupConfig = {
  mocks?: MockedResponse[];
};

function setup(config?: SetupConfig) {
  const mocks = config?.mocks ?? [];

  render(<CustomerListTableFilters />, {
    mocks,
  });

  return {
    async fillControls(fieldInstructions: FieldInstruction[]) {
      for (const instruction of fieldInstructions) {
        const { label } = instruction;

        if (instruction.type === 'multiselect' || instruction.type === 'select') {
          const { value } = instruction;

          expect(screen.getByRole('combobox', { name: label })).toBeInTheDocument();

          if (value) {
            await waitFor(() => expect(screen.queryByRole('combobox', { name: label })).not.toBeDisabled(), {
              timeout: 3000,
            });

            userEvent.type(screen.getByRole('combobox', { name: label }), value.toLowerCase().substring(0, 3));
            userEvent.click(screen.getByRole('option', { name: value, selected: false }));
          }
        } else if (instruction.type === 'checkbox') {
          expect(screen.getByRole('checkbox', { name: label })).toBeInTheDocument();

          userEvent.click(screen.getByRole('checkbox', { name: label }));
        } else if (instruction.type === 'date') {
          const { value } = instruction;

          expect(screen.getByRole('textbox', { name: label })).toBeInTheDocument();

          if (value) {
            userEvent.type(screen.getByRole('textbox', { name: label }), value);
          }
        }
      }
    },
    getSearchParams() {
      return window.location.search;
    },
  };
}

// https://stackoverflow.com/a/54487392
type OmitDistributive<T, K extends PropertyKey> = T extends any
  ? T extends object
    ? Id<OmitRecursively<T, K>>
    : T
  : never;
type Id<T> = {} & { [P in keyof T]: T[P] };
type OmitRecursively<T extends any, K extends PropertyKey> = Omit<{ [P in keyof T]: OmitDistributive<T[P], K> }, K>;

type MockedResponseEnhancer = () => {
  variables: Partial<FILTER_OPTIONS_VAR>;
  data: OmitRecursively<Partial<FILTER_OPTIONS>, '__typename'>;
};

function createFilterOptionsMockedResponse(...mockedResponseEnhancers: MockedResponseEnhancer[]) {
  // Variables when view is mounted
  const defaultVariables = {
    harborId: null,
    pierId: undefined,
    winterStorageGridAreaId: '',
    skipPiers: true,
    skipBerths: true,
    skipWinterStorageGridArea: true,
  };
  // Data that is returned with defaultVariables
  const defaultData = {
    boatTypes,
    harbors,
    winterStorageAreas,
  };

  const enhanced = mockedResponseEnhancers.reduce(
    ({ variables, data }, enhancers) => {
      const result = enhancers();

      return {
        variables: {
          ...variables,
          ...result.variables,
        },
        data: {
          ...data,
          ...result.data,
        },
      };
    },
    { variables: {}, data: {} }
  );

  return {
    request: {
      query: FILTER_OPTIONS_QUERY,
      variables: {
        ...defaultVariables,
        ...enhanced.variables,
      },
    },
    result: {
      data: {
        ...defaultData,
        ...enhanced.data,
      },
    },
  };
}

function harbourSelectedEnhancer() {
  return {
    variables: {
      harborId: harbour2.node.id,
      skipPiers: false,
    },
    data: {
      piers,
    },
  };
}

function pierSelectedEnhancer() {
  return {
    variables: {
      pierId: pier1.node.id,
      skipBerths: false,
    },
    data: {
      berths,
    },
  };
}

function winterStorageGridAreaSelectedEnhancer() {
  return {
    variables: {
      winterStorageGridAreaId: gridWinterStorageArea.node.id,
      skipWinterStorageGridArea: false,
    },
    data: {
      winterStorageGridArea: winterStorageGridAreaExpanded,
    },
  };
}

// Ignore act errors
let error: (...args: any[]) => void;
beforeAll(() => {
  error = console.error;
  console.error = (message?: any, ...rest: any[]) => {
    if (message.startsWith('Warning: An update to')) {
      return;
    }

    return error(message, ...rest);
  };
});

afterAll(() => {
  console.error = error;
});

// For performance reasons, cover multiple test cases in this same test
test(`allows user to give search conditions`, async () => {
  const { fillControls, getSearchParams } = setup({
    mocks: [
      // Query with initial values
      createFilterOptionsMockedResponse(),
      // Query when harbour selected
      createFilterOptionsMockedResponse(harbourSelectedEnhancer),
      // Query when harbour, pier selected
      createFilterOptionsMockedResponse(harbourSelectedEnhancer, pierSelectedEnhancer),
      // Query when harbour, pier, winterStorageGridArea selected
      createFilterOptionsMockedResponse(
        harbourSelectedEnhancer,
        pierSelectedEnhancer,
        winterStorageGridAreaSelectedEnhancer
      ),
    ],
  });
  const sectionCheckboxes: Record<string, CheckboxInstruction> = {
    berthSection: {
      name: 'berthSection',
      label: 'Venepaikat',
      type: 'checkbox',
    },
    winterStorageSection: {
      name: 'winterStorageSection',
      label: 'Talvisäilytysruutupaikat',
      type: 'checkbox',
    },
    unmarkedWinterStorageSection: {
      name: 'unmarkedWinterStorageSection',
      label: 'Nostojärjestysalue',
      type: 'checkbox',
    },
    dateSection: {
      name: 'dateSection',
      label: 'Aikaväli:',
      type: 'checkbox',
    },
  };
  const fieldInstructions: FieldInstruction[] = [
    {
      name: 'customerGroups',
      label: 'Asiakasryhmä',
      type: 'multiselect',
      value: 'Yritys',
    },
    {
      name: 'boatTypeIds',
      label: 'Veneen tyyppi',
      type: 'multiselect',
      value: boatType1.name,
    },
    {
      name: 'leaseStatuses',
      label: 'Sopimuksen tila',
      type: 'multiselect',
      value: 'Maksettu',
    },
    sectionCheckboxes.berthSection,
    {
      name: 'harborIds',
      label: 'Venesatama',
      type: 'multiselect',
      value: harbour2.node.properties.name,
    },
    {
      name: 'pierId',
      label: 'Laituri ja paikka',
      type: 'select',
      value: pier1.node.properties.identifier,
    },
    {
      name: 'berthId',
      label: 'Venepaikka',
      type: 'select',
      value: berth1.node.number,
    },
    sectionCheckboxes.winterStorageSection,
    {
      name: 'winterStorageGridAreaIds',
      label: 'Talvisäilytysruutualue',
      type: 'multiselect',
      value: gridWinterStorageArea.node.properties.name,
    },
    {
      name: 'winterStoragePlaceId',
      label: 'Talvisäilytyspaikka',
      type: 'select',
      // eslint-disable-next-line max-len
      value: `${winterStorageGridAreaExpanded.properties.sections.edges[0].node.properties.identifier} / ${winterStorageGridAreaExpanded.properties.sections.edges[0].node.properties.places.edges[0].node.number}`,
    },
    sectionCheckboxes.unmarkedWinterStorageSection,
    {
      name: 'winterStorageAreaIds',
      label: 'Nostojärjestysalue',
      type: 'multiselect',
      value: winterStorageArea2.node.properties.name,
    },
    sectionCheckboxes.dateSection,
    {
      name: 'dateStart',
      label: 'Alkupäivämäärä',
      type: 'date',
      value: '3.4.2011',
    },
    {
      name: 'dateEnd',
      label: 'Loppupäivämäärä',
      type: 'date',
      value: '3.4.2013',
    },
    {
      name: 'nonHelsinkiCitizen',
      label: 'Kotikunta muu kuin Helsinki',
      type: 'checkbox',
    },
    {
      name: 'moreThanOneBerthOrWinterStorage',
      label: 'Enemmän kuin yksi vene- tai talvisäilytyspaikka',
      type: 'checkbox',
    },
  ];

  toggleFilters();
  await fillControls(fieldInstructions);
  submitFilters();

  expect(getSearchParams()).toMatchInlineSnapshot(
    `"?customerGroups=COMPANY&boatTypeIds=1&leaseStatuses=PAID&harborIds=2&pierId=pier-1&berthId=berth-1&winterStorageGridAreaIds=winterStorageArea-1&winterStoragePlaceId=place-1&winterStorageAreaIds=winterStorageArea-2&moreThanOneBerthOrWinterStorage=true&nonHelsinkiCitizen=true&dateInterval=3.4.2011-3.4.2013"`
  );

  // Verify that disabling sections resets values
  toggleFilters();
  // Toggle section checkboxes again
  await fillControls(Object.values(sectionCheckboxes));
  submitFilters();

  const searchParams = getSearchParams();
  expect(searchParams).toMatchInlineSnapshot(
    `"?customerGroups=COMPANY&boatTypeIds=1&leaseStatuses=PAID&moreThanOneBerthOrWinterStorage=true&nonHelsinkiCitizen=true"`
  );
  const activeKeys = new URLSearchParams(searchParams).keys();
  expect(activeKeys).not.toContain([
    'harborIds',
    'pierId',
    'berthId',
    'winterStorageGridAreaIds',
    'winterStoragePlaceId',
    'winterStorageAreaIds',
    'interval',
  ]);
}, 100_000);
