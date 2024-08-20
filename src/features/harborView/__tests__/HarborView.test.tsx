import { MockedProvider } from '@apollo/react-testing';
import { shallow } from 'enzyme';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import HarborView, { HarborViewProps } from '../HarborView';
import { IndividualHarborData } from '../types';
import { getBerths, getIndividualHarborData, getPiers } from '../utils';
import { IndividualHarborQueryData as mockData } from '../__fixtures__/mockData';

const berths = getBerths(mockData);
const harbor = getIndividualHarborData(mockData) as IndividualHarborData;
const piers = getPiers(mockData);

const mockProps: HarborViewProps = {
  berths,
  harbor,
  piers,
  setBerthToEdit: jest.fn(),
  setCreatingBerth: jest.fn(),
  setCreatingPier: jest.fn(),
  setEditingHarbor: jest.fn(),
  setPierToEdit: jest.fn(),
  setFilterByActiveBerths: jest.fn(),
  filterByActiveBerths: null,
};

describe('HarborView', () => {
  const getWrapper = (props?: Partial<HarborViewProps>) =>
    shallow(
      <MockedProvider>
        <HashRouter>
          <HarborView {...mockProps} {...props} />
        </HashRouter>
      </MockedProvider>
    );

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });
});
