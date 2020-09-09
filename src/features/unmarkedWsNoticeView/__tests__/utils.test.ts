import { mockData } from '../__fixtures__/mockData';
import { getWinterStorageNoticeDetailsData } from '../utils';

describe('unmarkedWsNoticeView utils', () => {
  describe('getWinterStorageNoticeDetailsData', () => {
    it('parses data correctly', () => {
      const winterStorageNoticeDetailsData = getWinterStorageNoticeDetailsData(
        mockData.winterStorageNotice,
        mockData.boatTypes
      );
      expect(winterStorageNoticeDetailsData).toMatchSnapshot();
    });
  });
});
