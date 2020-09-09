import { mockData } from '../__fixtures__/mockData';
import { getNoticeDetailsData } from '../utils';

describe('unmarkedWsNoticeView utils', () => {
  describe('getWinterStorageNoticeDetailsData', () => {
    it('parses data correctly', () => {
      const winterStorageNoticeDetailsData = getNoticeDetailsData(mockData.winterStorageNotice, mockData.boatTypes);
      expect(winterStorageNoticeDetailsData).toMatchSnapshot();
    });
  });
});
