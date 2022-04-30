import { Section } from '../../types';
import { SECTION } from '../__generated__/SECTION';

export const getSection = (data: SECTION | undefined): Section => {
  if (!data || !data?.winterStorageSection?.properties) return {};
  const {
    electricity,
    water,
    gate,
    identifier,
    summerStorageForBoats,
    summerStorageForDockingEquipment,
    summerStorageForTrailers,
  } = data.winterStorageSection.properties;
  return {
    identifier,
    electricity,
    water,
    gate,
    summerStorageForBoats,
    summerStorageForDockingEquipment,
    summerStorageForTrailers,
  };
};
