import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './offerTableTools.module.scss';
import Text from '../text/Text';
import StatusLabel from '../statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import Button from '../button/Button';

export interface OfferTableToolsProps {
  application?: {
    date: string;
    type: string;
    status: ApplicationStatus;
  } | null;
  title?: string;
  handleReturn(): void;
}

const OfferTableTools = ({ application, handleReturn, title }: OfferTableToolsProps) => {
  const { t } = useTranslation();

  const renderTitle = () => {
    if (!application) return <Text size="l">{title ?? t('common.terminology.berths').toUpperCase()}</Text>;

    return (
      <>
        <Text size="l">
          {title ?? t('common.terminology.berths').toUpperCase()}: {application.type} {application.date}
        </Text>

        <StatusLabel
          className={styles.statusLabel}
          type={APPLICATION_STATUS[application.status].type}
          label={t(APPLICATION_STATUS[application.status].label)}
        />
      </>
    );
  };

  return (
    <div className={styles.tableTools}>
      <div>{renderTitle()}</div>
      <div>
        <Button variant="secondary" className={classNames(styles.button)} onClick={handleReturn}>
          {t('offer.tableTools.return')}
        </Button>
      </div>
    </div>
  );
};

export default OfferTableTools;
