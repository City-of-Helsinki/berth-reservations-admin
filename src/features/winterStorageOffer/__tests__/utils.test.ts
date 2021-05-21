import {
  getAllSectionsIdentifiers,
  getApplicationBoat,
  getWinterStorageArea,
  getWinterStoragePlaceData,
  isPlaceSuitableForBoat,
} from '../utils';
import {
  getMockBoat,
  getMockPlace,
  mockApplication,
  mockAreaData,
  mockBoatTypes,
  mockSectionsData,
} from '../__fixtures__/mockData';

describe('winterStorageOffer utils', () => {
  describe('getWinterStoragePlaceData', () => {
    it('maps data correctly', () => {
      expect(getWinterStoragePlaceData(mockAreaData)).toMatchSnapshot();
    });
  });

  describe('getAllSectionsIdentifiers', () => {
    it('maps data correctly', () => {
      expect(getAllSectionsIdentifiers(mockSectionsData)).toMatchSnapshot();
    });
  });

  describe('getWinterStorageArea', () => {
    it('maps data correctly', () => {
      expect(getWinterStorageArea(mockAreaData)).toMatchSnapshot();
    });
  });

  describe('getApplicationBoat', () => {
    it('maps data correctly', () => {
      expect(getApplicationBoat(mockApplication, mockBoatTypes));
    });
  });

  describe('isPlaceSuitableForBoat', () => {
    it('returns true if the boat is shorter or equal than the place', () => {
      expect(isPlaceSuitableForBoat(getMockPlace(3), getMockBoat(2))).toEqual(true);
      expect(isPlaceSuitableForBoat(getMockPlace(2), getMockBoat(2))).toEqual(true);
    });

    it('returns false if the boat is longer than the place', () => {
      expect(isPlaceSuitableForBoat(getMockPlace(2), getMockBoat(3))).toEqual(false);
    });

    it('returns true if only the boat length is unknown', () => {
      expect(isPlaceSuitableForBoat(getMockPlace(2), getMockBoat(null))).toEqual(true);
      expect(isPlaceSuitableForBoat(getMockPlace(2), undefined)).toEqual(true);
    });

    it('returns false if only the place length is unknown', () => {
      expect(isPlaceSuitableForBoat(getMockPlace(null), getMockBoat(2))).toEqual(false);
    });

    it('returns true if both lengths are unknown', () => {
      expect(isPlaceSuitableForBoat(getMockPlace(null), getMockBoat(null))).toEqual(true);
      expect(isPlaceSuitableForBoat(getMockPlace(null), undefined)).toEqual(true);
    });
  });
});
