import React from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import Text from '../text/Text';
import { formatDate } from '../utils/format';
import Chip from '../chip/Chip';
import { APPLICATION_STATUS } from '../utils/consonants';
import { canDeleteApplication, canUnlinkCustomer } from '../utils/applicationUtils';
import DeleteButton from '../deleteButton/DeleteButton';
import styles from './applicationHeader.module.scss';

interface ApplicationHeaderProps {
  text: string;
  createdAt: string;
  status: ApplicationStatus;
  customerId?: string;
  isDeleteApplicationLoading?: boolean;
  handleUnlinkCustomer?(): void;
  handleDeleteApplication?(): void;
}

const ApplicationHeader = ({
  text,
  createdAt,
  status,
  customerId,
  isDeleteApplicationLoading,
  handleDeleteApplication,
  handleUnlinkCustomer,
}: ApplicationHeaderProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.actions}>
      <div className={styles.noticeStatus}>
        <Text as="h2" size="xl" weight="normalWeight">
          {text} {formatDate(createdAt, i18n.language)}
        </Text>
        <Chip color={APPLICATION_STATUS[status].color} label={t(APPLICATION_STATUS[status].label)} />
      </div>
      <div className={styles.actionsRight}>
        {canUnlinkCustomer(status) && customerId && handleUnlinkCustomer && (
          <DeleteButton
            onConfirm={handleUnlinkCustomer}
            buttonText={t('common.unlinkCustomer.buttonText')}
            infoText={t('common.unlinkCustomer.infoText')}
          />
        )}
        {canDeleteApplication(status) && handleDeleteApplication && (
          <DeleteButton
            buttonText={t('unmarkedWsNotices.view.deleteNotice')}
            onConfirm={handleDeleteApplication}
            disabled={isDeleteApplicationLoading}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationHeader;
