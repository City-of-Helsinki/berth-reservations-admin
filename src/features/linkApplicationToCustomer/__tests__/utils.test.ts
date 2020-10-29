import { getFilteredCustomersData, getWinterStoragePlaces } from '../utils';
import { mockFilteredCustomers, mockWinterStorageLeases } from '../__fixtures__/mockData';
import { FILTERED_CUSTOMERS } from '../__generated__/FILTERED_CUSTOMERS';

describe('utils', () => {
  describe('getWinterStoragePlaces', () => {
    it('should return areas for active leases on marked and unmarked places', () => {
      expect(getWinterStoragePlaces(mockWinterStorageLeases)).toEqual('Nostojärjestysalue, Talvisäilytysalue');
    });

    it('should return undefined if leases is null', () => {
      expect(getWinterStoragePlaces(null)).toBeUndefined();
    });
  });

  describe('getFilteredCustomersData', () => {
    it('should map filtered customers data', () => {
      expect(getFilteredCustomersData(mockFilteredCustomers)).toMatchSnapshot();
    });

    it('should return an empty array when there are no customers', () => {
      const emptyData: FILTERED_CUSTOMERS = {
        profiles: {
          __typename: 'ProfileNodeConnection',
          count: 0,
          edges: [],
        },
      };
      const nullEdge: FILTERED_CUSTOMERS = {
        profiles: {
          __typename: 'ProfileNodeConnection',
          count: 1,
          edges: [null],
        },
      };
      const nullNode: FILTERED_CUSTOMERS = {
        profiles: {
          __typename: 'ProfileNodeConnection',
          count: 1,
          edges: [{ __typename: 'ProfileNodeEdge', node: null }],
        },
      };

      expect(getFilteredCustomersData(emptyData)).toEqual([]);
      expect(getFilteredCustomersData(nullEdge)).toEqual([]);
      expect(getFilteredCustomersData(nullNode)).toEqual([]);
      expect(getFilteredCustomersData(undefined)).toEqual([]);
    });
  });
});
