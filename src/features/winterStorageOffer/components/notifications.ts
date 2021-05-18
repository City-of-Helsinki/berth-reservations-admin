import { TFunction } from 'i18next';

import hdsToast from '../../../common/toast/hdsToast';
import { PlaceData } from '../types';

export const showWinterStorageSuccessToast = (place: PlaceData, t: TFunction) =>
  hdsToast({
    type: 'success',
    autoDismiss: true,
    autoDismissTime: 5000,
    labelText: t('offer.notifications.winterStorageLeaseCreated.label'),
    text: t('offer.notifications.winterStorageLeaseCreated.description', {
      area: place.area,
      section: place.section,
      place: place.number,
    }),
  });
