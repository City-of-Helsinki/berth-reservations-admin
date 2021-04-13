import { getAllPiersIdentifiers, getHarbor, getBerthData } from '../utils';
import { berthOfferQueryData } from '../__fixtures__/mockData';

describe('utils', () => {
  describe('getOfferData', () => {
    it('should return offer data', () => {
      const berthData = getBerthData(berthOfferQueryData['harborByServicemapId']);

      expect(berthData).toMatchSnapshot();
    });
  });

  describe('getAllPiersIdentifiers', () => {
    it('should return pier tabs', () => {
      const harbor = getAllPiersIdentifiers(berthOfferQueryData['harborByServicemapId']?.properties?.piers);

      expect(harbor).toMatchSnapshot();
    });
  });

  describe('getHarbor', () => {
    it('should return null when the provided data is undefined', () => {
      expect(getHarbor(undefined)).toStrictEqual(null);
    });

    it('should return harbor', () => {
      const harbor = getHarbor(berthOfferQueryData.harborByServicemapId);

      expect(harbor).toMatchSnapshot();
    });
  });
});
