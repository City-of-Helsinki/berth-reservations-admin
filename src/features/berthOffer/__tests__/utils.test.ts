import { getAllPiersIdentifiers, getHarbor, getBerthData, getLeaseBoat } from '../utils';
import { berthOfferQueryData, mockSwitchBerthLease } from '../__fixtures__/mockData';
import { SWITCH_BERTH_LEASE } from '../__generated__/SWITCH_BERTH_LEASE';

describe('utils', () => {
  describe('getOfferData', () => {
    it('should return offer data', () => {
      const berthData = getBerthData(berthOfferQueryData['harbor']);

      expect(berthData).toMatchSnapshot();
    });
  });

  describe('getAllPiersIdentifiers', () => {
    it('should return pier tabs', () => {
      const harbor = getAllPiersIdentifiers(berthOfferQueryData['harbor']?.properties?.piers);

      expect(harbor).toMatchSnapshot();
    });
  });

  describe('getHarbor', () => {
    it('should return null when the provided data is undefined', () => {
      expect(getHarbor(undefined)).toStrictEqual(null);
    });

    it('should return harbor', () => {
      const harbor = getHarbor(berthOfferQueryData.harbor);

      expect(harbor).toMatchSnapshot();
    });
  });

  describe('getLeaseBoat', () => {
    it('should map the lease boat correctly', () => {
      expect(getLeaseBoat(mockSwitchBerthLease)).toEqual({
        boatDraught: 0.5,
        boatLength: 3,
        boatModel: 'MODEL',
        boatName: 'BOAT',
        boatRegistrationNumber: '',
        boatType: 'Soutuvene',
        boatWeight: 100,
        boatWidth: 1,
      });
    });

    it('should return undefined is no boat exists', () => {
      const noBoat: SWITCH_BERTH_LEASE = {
        berthLease: {
          __typename: 'BerthLeaseNode',
          boat: null,
          id: 'MOCK-LEASE',
        },
      };

      expect(getLeaseBoat(noBoat)).toEqual(undefined);
    });
  });
});
