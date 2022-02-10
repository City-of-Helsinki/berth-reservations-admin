import React from 'react';

import { render, screen, userEvent } from '../../../common/testUtils/testingLibrary';
import CustomerListContainer from '../CustomerListContainer';

type SetupConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mocks: any[];
};

function setup(config?: SetupConfig) {
  const mocks = config?.mocks ?? [];

  render(<CustomerListContainer />, {
    mocks,
  });

  return {
    toggleFilters: () => {
      userEvent.click(screen.getByRole('button', { name: 'Rajaa' }));
    },
  };
}

test(`customer list filter form has expected fields`, () => {
  const { toggleFilters } = setup();

  toggleFilters();

  // For performance reasons, cover all these fields in the same test case
  // without re-initializing the DOM.
  [
    {
      name: 'customerGroups',
      label: 'Asiakasryhmä',
      type: 'multiselect',
    },
    {
      name: 'boatTypeIds',
      label: 'Veneen tyyppi',
      type: 'multiselect',
    },
    {
      name: 'leaseStatuses',
      label: 'Sopimuksen tila',
      type: 'multiselect',
    },
    {
      name: 'berthSection',
      label: 'Venepaikat',
      type: 'checkbox',
    },
    {
      name: 'harborIds',
      label: 'Venesatama',
      type: 'multiselect',
    },
    {
      name: 'harborIds',
      label: 'Laituri ja paikka',
      type: 'select',
    },
    {
      name: 'winterStorageSection',
      label: 'Talvisäilytysruutupaikat',
      type: 'checkbox',
    },
    {
      name: 'winterStorageGridAreaIds',
      label: 'Talvisäilytysruutualue',
      type: 'multiselect',
    },
    {
      name: 'winterStoragePlaceId',
      label: 'Talvisäilytyspaikka',
      type: 'select',
    },
    {
      name: 'unmarkedWinterStorageSection',
      label: 'Nostojärjestysalue',
      type: 'checkbox',
    },
    {
      name: 'winterStorageAreaIds',
      label: 'Nostojärjestysalue',
      type: 'multiselect',
    },
    {
      name: 'dateSection',
      label: 'Aikaväli:',
      type: 'checkbox',
    },
    // No good way to find these
    // {
    //   name: 'dateStart',
    //   label: '',
    //   type: 'date',
    // },
    // {
    //   name: 'dateEnd',
    //   label: '',
    //   type: 'date',
    // },
    {
      name: 'moreThanOneBerthOrWinterStorage',
      label: 'Enemmän kuin yksi vene- tai talvisäilytyspaikka',
      type: 'checkbox',
    },
  ].forEach(({ label, type }) => {
    switch (type) {
      case 'multiselect':
        expect(screen.getByRole('combobox', { name: label })).toBeInTheDocument();
        break;
      case 'select':
        expect(screen.getByRole('combobox', { name: label })).toBeInTheDocument();
        break;
      case 'checkbox':
        expect(screen.getByRole('checkbox', { name: label })).toBeInTheDocument();
        break;
      default:
      // pass
    }
  });
});
