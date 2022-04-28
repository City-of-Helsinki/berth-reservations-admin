import { WinterStorageAreaForm } from '../types';
import { WINTER_STORAGE_AREA_FORM } from '../__generated__/WINTER_STORAGE_AREA_FORM';

export const getWinterStorageAreaForm = (
  winterStorageAreaData: WINTER_STORAGE_AREA_FORM | undefined
): WinterStorageAreaForm | undefined => {
  if (!winterStorageAreaData?.winterStorageArea?.properties) {
    return undefined;
  }

  const {
    name,
    streetAddress,
    zipCode,
    municipality,
    wwwUrl,
    imageFile,
  } = winterStorageAreaData.winterStorageArea.properties;

  return {
    name: name || '',
    streetAddress: streetAddress || '',
    zipCode,
    municipality: municipality || '',
    wwwUrl,
    imageFile: imageFile || '',
  };
};

//TODO: Fix addedImageFile in the s form (check how to add file if its even needed)
export const mapValuesToMutation = (winterStorageAreaId: string, values: WinterStorageAreaForm) => {
  const { name, streetAddress, zipCode, municipality, wwwUrl, imageFile } = values;

  return {
    id: winterStorageAreaId,
    name,
    streetAddress,
    zipCode,
    municipalityId: (municipality as string).toLowerCase(),
    wwwUrl,
    ...(imageFile && { imageFile: imageFile }),
  };
};
