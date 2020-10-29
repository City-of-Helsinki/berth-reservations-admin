import { getWinterStorageApplicationData } from '../utils';
import { winterStorageApplicationMockData } from '../__fixtures__/mockData';
import { WINTER_STORAGE_APPLICATIONS } from '../__generated__/WINTER_STORAGE_APPLICATIONS';

describe('winterStorageApplicationList utils', () => {
  describe('getWinterStorageApplicationData', () => {
    it('correctly parses response data', () => {
      const applications = getWinterStorageApplicationData(winterStorageApplicationMockData);
      expect(applications).toMatchSnapshot();
    });

    it('should return an empty array if there are no winter storage applications', () => {
      const emptyData: WINTER_STORAGE_APPLICATIONS = {
        boatTypes: [],
        winterStorageApplications: {
          __typename: 'WinterStorageApplicationNodeConnection',
          count: 0,
          edges: [],
        },
      };
      const nullEdge: WINTER_STORAGE_APPLICATIONS = {
        boatTypes: [],
        winterStorageApplications: {
          __typename: 'WinterStorageApplicationNodeConnection',
          count: 0,
          edges: [null],
        },
      };
      const nullNode: WINTER_STORAGE_APPLICATIONS = {
        boatTypes: [],
        winterStorageApplications: {
          __typename: 'WinterStorageApplicationNodeConnection',
          count: 0,
          edges: [{ __typename: 'WinterStorageApplicationNodeEdge', node: null }],
        },
      };

      expect(getWinterStorageApplicationData(emptyData)).toEqual([]);
      expect(getWinterStorageApplicationData(nullEdge)).toEqual([]);
      expect(getWinterStorageApplicationData(nullNode)).toEqual([]);
      expect(getWinterStorageApplicationData(undefined)).toEqual([]);
    });
  });
});
