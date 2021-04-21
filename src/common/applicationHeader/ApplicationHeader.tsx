import React from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import Text from '../text/Text';
import { formatDate } from '../utils/format';
import StatusLabel from '../statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../utils/constants';
import { canDeleteApplication, canUnlinkCustomer } from '../utils/applicationUtils';
import DeleteButton from '../deleteButton/DeleteButton';
import styles from './applicationHeader.module.scss';

interface ApplicationHeaderProps {
  createdAt: string;
  customerId?: string;
  deleteApplicationLabel?: string;
  isDeletingApplication?: boolean;
  status: ApplicationStatus;
  text: string;
  handleUnlinkCustomer?(): void;
  handleDeleteApplication?(): void;
}

const ApplicationHeader = ({
  createdAt,
  customerId,
  deleteApplicationLabel,
  handleDeleteApplication,
  handleUnlinkCustomer,
  isDeletingApplication,
  status,
  text,
}: ApplicationHeaderProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.actions}>
      <div className={styles.noticeStatus}>
        <Text as="h2" size="xl" weight="normalWeight">
          {text} {formatDate(createdAt, i18n.language)}
        </Text>
        <StatusLabel type={APPLICATION_STATUS[status].type} label={t(APPLICATION_STATUS[status].label)} />
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
            buttonText={deleteApplicationLabel ?? t('common.deleteApplication')}
            onConfirm={handleDeleteApplication}
            disabled={isDeletingApplication}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationHeader;
