import { getUnmarkedWinterStorageNotices } from '../utils';
import { unmarkedWinterStorageNoticeMockData, singleNode } from '../__fixtures__/mockData';
import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICES_winterStorageNotices_edges_node as UNMARKED_WINTER_STORAGE_NOTICES_NODE,
} from '../__generated__/UNMARKED_WINTER_STORAGE_NOTICES';

describe('unmarkedWsNoticeList utils', () => {
  describe('getUnmarkedWinterStorageNotice', () => {
    it('should return parsed notices', () => {
      expect(getUnmarkedWinterStorageNotices(unmarkedWinterStorageNoticeMockData)).toMatchSnapshot();
    });

    it('should return an empty array if there are no notices', () => {
      const noData: UNMARKED_WINTER_STORAGE_NOTICES = {
        boatTypes: [],
        winterStorageNotices: {
          __typename: 'WinterStorageApplicationNodeConnection',
          count: 0,
          edges: [],
        },
      };
      expect(getUnmarkedWinterStorageNotices(noData)).toEqual([]);
      expect(getUnmarkedWinterStorageNotices(undefined)).toEqual([]);
    });

    it('should withstand all flavors of missing choices', () => {
      const result = {
        winterStorageArea: '',
        winterStorageAreaName: '',
      };
      const getMockDataWithChoices = (
        choices: UNMARKED_WINTER_STORAGE_NOTICES_NODE['winterStorageAreaChoices']
      ): UNMARKED_WINTER_STORAGE_NOTICES => ({
        boatTypes: [],
        winterStorageNotices: {
          __typename: 'WinterStorageApplicationNodeConnection',
          count: 1,
          edges: [
            {
              node: {
                ...singleNode,
                winterStorageAreaChoices: choices,
              },
              __typename: 'WinterStorageApplicationNodeEdge',
            },
          ],
        },
      });

      expect(getUnmarkedWinterStorageNotices(getMockDataWithChoices(null))[0].choice).toEqual(result);
      expect(getUnmarkedWinterStorageNotices(getMockDataWithChoices([]))[0].choice).toEqual(result);
      expect(getUnmarkedWinterStorageNotices(getMockDataWithChoices([null]))[0].choice).toEqual(result);
    });
  });
});
