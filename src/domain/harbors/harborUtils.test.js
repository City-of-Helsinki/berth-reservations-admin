import { getBerths, getHarborsData } from './harborUtils';
import { IndividualHarborQueryData } from './__mocks__/mockData';

const mockedData = {
  harbors: {
    edges: [
      {
        node: {
          id: 'SGFyYm9yTm9kZTpmN2M2YTQwZjAtOWViMi0zZjgyMTI0YjY0OGI=',
          properties: {
            name: 'Harbor 1',
            numberOfPlaces: null,
            piers: {
              edges: [
                {
                  node: {
                    properties: {
                      electricity: true,
                      gate: true,
                      lighting: true,
                      wasteCollection: true,
                      water: true,
                    },
                  },
                },
              ],
            },
          },
        },
      },
      {
        node: {
          id: 'SGFyYm9yTm9kZTplZDM1Q1ZTgtOGUyYS0zYmQxNDk4NjYzMDI=',
          properties: {
            name: 'Harbor 2',
            numberOfPlaces: null,
            piers: {
              edges: [
                {
                  node: {
                    properties: {
                      electricity: false,
                      gate: false,
                      lighting: true,
                      wasteCollection: true,
                      water: false,
                    },
                  },
                },
                {
                  node: {
                    properties: {
                      electricity: true,
                      gate: true,
                      lighting: true,
                      wasteCollection: true,
                      water: true,
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

describe('harborList', () => {
  describe('getHarborsData', () => {
    describe('failure path', () => {
      it('returns an empty array when "data" is undefined', () => {
        const data = undefined;
        expect(getHarborsData(data)).toHaveLength(0);
      });

      it('returns an empty array when "harbors" is null', () => {
        const data = { harbors: null };
        expect(getHarborsData(data)).toHaveLength(0);
      });

      it('returns an empty array when "harbor.node" is null', () => {
        const data = { harbors: { edges: [{ node: null }] } };
        expect(getHarborsData(data)).toHaveLength(0);
      });

      it('returns an empty array when "harbor.node.properties" is null', () => {
        const data = { harbors: { edges: [{ node: { properties: null } }] } };
        expect(getHarborsData(data)).toHaveLength(0);
      });
    });

    describe('success path', () => {
      it('returns an array with two harbors', () => {
        expect(getHarborsData(mockedData)).toHaveLength(2);
      });

      test('harbors follow the expected shape', () => {
        const firstHarbor = getHarborsData(mockedData)[0];
        const secondHarbor = getHarborsData(mockedData)[1];

        expect(firstHarbor).toMatchSnapshot();
        expect(secondHarbor).toMatchSnapshot();
      });
    });
  });
});

describe('individualHarbor', () => {
  describe('getBerths', () => {
    it('should return an empty array when the provided data is undefined', () => {
      expect(getBerths()).toStrictEqual([]);
    });

    it('should return an array of Berth objects', () => {
      const berths = getBerths(IndividualHarborQueryData);

      expect(berths).toMatchSnapshot();
    });
  });
});
