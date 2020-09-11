import { mockData } from '../__fixtures__/mockData';
import { getNoticeDetailsData } from '../utils';
import { UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice as NOTICE } from '../__generated__/UNMARKED_WINTER_STORAGE_NOTICE';

describe('unmarkedWsNoticeView utils', () => {
  describe('getWinterStorageNoticeDetailsData', () => {
    it('parses data correctly', () => {
      const winterStorageNoticeDetailsData = getNoticeDetailsData(mockData.winterStorageNotice, mockData.boatTypes);
      expect(winterStorageNoticeDetailsData).toMatchSnapshot();
    });

    it('should withstand all flavors of missing choices', () => {
      const result = {
        winterStorageArea: '',
        winterStorageAreaName: '',
      };
      const getMockDataWithChoices = (choices: NOTICE['winterStorageAreaChoices']): NOTICE => ({
        ...mockData.winterStorageNotice,
        winterStorageAreaChoices: choices,
      });

      expect(getNoticeDetailsData(getMockDataWithChoices(null), []).choice).toEqual(result);
      expect(getNoticeDetailsData(getMockDataWithChoices([]), []).choice).toEqual(result);
      expect(getNoticeDetailsData(getMockDataWithChoices([null]), []).choice).toEqual(result);
    });
  });
});
