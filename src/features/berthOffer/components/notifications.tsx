import { Notification } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import hdsToast from '../../../common/toast/hdsToast';
import { BerthData } from '../types';

export const NoDataNotification = () => {
  const { t } = useTranslation();
  return (
    <Notification label={t('common.notification.noData.label')}>
      {t('common.notification.noData.description')}
    </Notification>
  );
};

export const ErrorNotification = () => {
  const { t } = useTranslation();
  return (
    <Notification label={t('common.notification.error.label')} type="error">
      {t('common.notification.error.description')}
    </Notification>
  );
};

export const NoBoatNotification = () => {
  const { t } = useTranslation();
  return (
    <Notification label={t('common.notification.error.label')} type="error">
      {t('offer.notifications.noBoat.description')}
    </Notification>
  );
};

export const showBerthSuccessToast = (berth: BerthData, t: TFunction) =>
  hdsToast({
    type: 'success',
    autoDismiss: true,
    autoDismissTime: 5000,
    labelText: t('offer.notifications.berthLeaseCreated.label'),
    text: t('offer.notifications.berthLeaseCreated.description', {
      harbor: berth.harbor,
      pier: berth.pier,
      berth: berth.berth,
    }),
  });
