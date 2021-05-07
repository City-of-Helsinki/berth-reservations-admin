import { Harbor } from '../../types';
import { HARBOR_FORM } from '../__generated__/HARBOR_FORM';
import { PersistedFile } from '../../../../../common/fileList/FileList';

export const getHarbor = (harborData: HARBOR_FORM | undefined): Harbor | undefined => {
  if (!harborData || !harborData.harbor || !harborData.harbor.properties) {
    return undefined;
  }

  const { name, streetAddress, zipCode, municipality, wwwUrl, imageFile } = harborData.harbor.properties;

  const getImageFile = (imageFile: string | null): undefined | PersistedFile => {
    if (imageFile === null) {
      return undefined;
    }

    return {
      id: '0',
      name: imageFile,
      markedForDeletion: false,
    };
  };

  return {
    name: name || '',
    streetAddress: streetAddress || '',
    zipCode,
    municipality: municipality || '',
    wwwUrl,
    existingImageFile: getImageFile(imageFile),
    addedImageFile: undefined,
  };
};

export const mapValuesToMutation = (harborId: string, values: Harbor) => {
  const { name, streetAddress, zipCode, municipality, wwwUrl, addedImageFile } = values;

  return {
    id: harborId,
    name,
    streetAddress,
    zipCode,
    municipalityId: (municipality as string).toLowerCase(),
    wwwUrl,
    ...(addedImageFile && { imageFile: addedImageFile }),
  };
};
