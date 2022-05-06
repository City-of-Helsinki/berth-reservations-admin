import { Place, WinterStorageAreaForm } from '../types';
import { WINTER_STORAGE_AREA_FORM } from '../__generated__/WINTER_STORAGE_AREA_FORM';
import { INDIVIDUAL_PLACE } from '../placeForm/__generated__/INDIVIDUAL_PLACE';

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

export const getWinterStoragePlace = (placeData: INDIVIDUAL_PLACE | undefined): Place | undefined => {
  if (!placeData || !placeData.winterStoragePlace) return undefined;
  const { number, isActive, width, length, comment } = placeData.winterStoragePlace;
  return {
    number: String(number),
    isActive,
    width,
    length,
    comment,
    winterStorageSectionId: placeData.winterStoragePlace.winterStorageSection.id,
    winterStorageSection: placeData.winterStoragePlace.winterStorageSection.properties?.identifier,
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
