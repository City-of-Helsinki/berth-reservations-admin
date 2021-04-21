import { INDIVIDUAL_APPLICATION_berthApplication_switchOffers as BerthSwitchOffersData } from '../__generated__/INDIVIDUAL_APPLICATION';
import { BerthSwitchOfferDetails } from './types';

export const getSwitchOffers = (switchOffersData: BerthSwitchOffersData): BerthSwitchOfferDetails[] => {
  return switchOffersData.edges.reduce<BerthSwitchOfferDetails[]>((acc, edge) => {
    const switchOffer = edge?.node;
    if (switchOffer) {
      const berthSwitchOffer = {
        id: switchOffer.id,
        status: switchOffer.status,
        berthComment: switchOffer.berth.comment,
        berthDepth: switchOffer.berth.depth,
        berthIsAccessible: switchOffer.berth.isAccessible ?? false,
        berthLength: switchOffer.berth.length,
        berthMooringType: switchOffer.berth.mooringType,
        berthNum: switchOffer.berth.number,
        berthWidth: switchOffer.berth.width,
        electricity: switchOffer.berth.pier.properties?.electricity ?? false,
        gate: switchOffer.berth.pier.properties?.gate ?? false,
        harborName: switchOffer.berth.pier.properties?.harbor.properties?.name ?? '',
        lighting: switchOffer.berth.pier.properties?.lighting ?? false,
        pierIdentifier: switchOffer.berth.pier.properties?.identifier ?? '',
        wasteCollection: switchOffer.berth.pier.properties?.wasteCollection ?? false,
        water: switchOffer.berth.pier.properties?.water ?? false,
      };
      return [...acc, berthSwitchOffer];
    }
    return acc;
  }, []);
};
