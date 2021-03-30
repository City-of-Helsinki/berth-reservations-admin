import { getAllPiersIdentifiers, getHarbor, getOfferData } from '../utils';
import { OfferQueryData } from '../__fixtures__/mockData';

describe('utils', () => {
  describe('getOfferData', () => {
    it('should return offer data', () => {
      const berthData = getOfferData(OfferQueryData['harborByServicemapId']);

      expect(berthData).toMatchSnapshot();
    });
  });

  describe('getAllPiersIdentifiers', () => {
    it('should return pier tabs', () => {
      const harbor = getAllPiersIdentifiers(OfferQueryData['harborByServicemapId']?.properties?.piers?.edges);

      expect(harbor).toMatchSnapshot();
    });
  });

  describe('getHarbor', () => {
    it('should return null when the provided data is undefined', () => {
      expect(getHarbor(undefined)).toStrictEqual(null);
    });

    it('should return harbor', () => {
      const harbor = getHarbor(OfferQueryData.harborByServicemapId);

      expect(harbor).toMatchSnapshot();
    });
  });
});
