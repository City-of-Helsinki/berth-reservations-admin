import { getBerthApplicationData } from '../utils';
import { mockData } from '../__fixtures__/mockData';
import {
  BERTH_APPLICATIONS,
  BERTH_APPLICATIONS_berthApplications_edges as BerthApplicationNodeEdge,
} from '../__generated__/BERTH_APPLICATIONS';

const buildTestData = (edges: (BerthApplicationNodeEdge | null)[]): BERTH_APPLICATIONS => ({
  berthApplications: {
    __typename: 'BerthApplicationNodeConnection',
    count: 1,
    edges: edges,
  },
  boatTypes: [{ __typename: 'BoatTypeType', id: '1', name: 'Purjevene' }],
});

describe('utils', () => {
  describe('getBerthApplicationData', () => {
    it('should return berth application data', () => {
      expect(getBerthApplicationData(mockData)).toMatchSnapshot();
    });

    it('should return empty array when there are no berth applications', () => {
      const emptyData: BERTH_APPLICATIONS = buildTestData([]);
      const nullEdge: BERTH_APPLICATIONS = buildTestData([null]);
      const nullNode: BERTH_APPLICATIONS = buildTestData([{ __typename: 'BerthApplicationNodeEdge', node: null }]);

      expect(getBerthApplicationData(emptyData)).toEqual([]);
      expect(getBerthApplicationData(nullEdge)).toEqual([]);
      expect(getBerthApplicationData(nullNode)).toEqual([]);
      expect(getBerthApplicationData(undefined)).toEqual([]);
    });
  });
});
