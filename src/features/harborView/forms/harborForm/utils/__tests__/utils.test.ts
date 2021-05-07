import { getHarbor, mapValuesToMutation } from '../utils';

describe('HarborForm utils', () => {
  describe('getHarbor', () => {
    it('should return "undefined" if no data', () => {
      expect(getHarbor(undefined)).toEqual(undefined);
      expect(getHarbor({ harbor: null })).toEqual(undefined);
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: null,
          },
        })
      ).toEqual(undefined);
    });

    it('should map empty fields correctly', () => {
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: {
              __typename: 'HarborProperties',
              imageFile: null,
              municipality: null,
              name: null,
              streetAddress: null,
              wwwUrl: 'https://hel.fi',
              zipCode: '00210',
            },
          },
        })
      ).toEqual({
        existingImageFile: undefined,
        addedImageFile: undefined,
        municipality: '',
        name: '',
        streetAddress: '',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });

    it('should map filled "imageFile" fields correctly', () => {
      expect(
        getHarbor({
          harbor: {
            __typename: 'HarborNode',
            id: 'test',
            properties: {
              __typename: 'HarborProperties',
              imageFile: 'https://hel.fi',
              municipality: 'Helsinki',
              name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
              streetAddress: 'Meripuistotie 1a',
              wwwUrl: 'https://hel.fi',
              zipCode: '00210',
            },
          },
        })
      ).toEqual({
        existingImageFile: {
          id: '0',
          markedForDeletion: false,
          name: 'https://hel.fi',
        },
        addedImageFile: undefined,
        municipality: 'Helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });
  });

  describe('mapValuesToMutation', () => {
    it('should map empty "imageFile" fields correctly', () => {
      expect(
        mapValuesToMutation('test', {
          existingImageFile: { id: 'test', name: 'test' },
          addedImageFile: undefined,
          municipality: 'Helsinki',
          name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
          streetAddress: 'Meripuistotie 1a',
          wwwUrl: 'https://hel.fi',
          zipCode: '00210',
        })
      ).toEqual({
        id: 'test',
        municipalityId: 'helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });

    it('should map filled "imageFile" fields correctly', () => {
      const testImage = new File([], 'testImage.jpg');

      expect(
        mapValuesToMutation('test', {
          existingImageFile: undefined,
          addedImageFile: testImage,
          municipality: 'Helsinki',
          name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
          streetAddress: 'Meripuistotie 1a',
          wwwUrl: 'https://hel.fi',
          zipCode: '00210',
        })
      ).toEqual({
        id: 'test',
        imageFile: testImage,
        municipalityId: 'helsinki',
        name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
        streetAddress: 'Meripuistotie 1a',
        wwwUrl: 'https://hel.fi',
        zipCode: '00210',
      });
    });
  });
});
