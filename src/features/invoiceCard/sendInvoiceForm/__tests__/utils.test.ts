import { addDaysToDate, getToday, mapDateToDateInputValue } from '../utils';

describe('sendInvoiceForm utils', () => {
  describe('getToday', () => {
    const mockDate: Date = new Date('2020-09-23T00:00:00.000Z');
    const dateSpy = jest.spyOn(global.Date, 'now').mockImplementation(() => mockDate.valueOf());

    it('should return the mocked date', () => {
      expect(getToday()).toEqual(new Date('2020-09-23T00:00:00.000Z'));
      expect(getToday()).not.toEqual(new Date('2020-09-24T00:00:00.000Z'));
    });

    afterAll(() => {
      dateSpy.mockRestore();
    });
  });

  describe('addDaysToDate', () => {
    it('should add the days to the date correctly', () => {
      expect(addDaysToDate(new Date('2020-09-23T00:00:00.000Z'), 1)).toEqual(new Date('2020-09-24T00:00:00.000Z'));
      expect(addDaysToDate(new Date('2020-09-23T00:00:00.000Z'), 14)).toEqual(new Date('2020-10-07T00:00:00.000Z'));
    });
  });

  describe('mapDateToDateInputValue', () => {
    it('should map a date to an ISO 8601 date string', () => {
      expect(mapDateToDateInputValue(new Date('2020-09-23T00:00:00.000Z'))).toEqual('2020-09-23');
    });
  });
});
