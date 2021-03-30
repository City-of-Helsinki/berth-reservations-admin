import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './tableTools.module.scss';
import Text from '../../../common/text/Text';
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../../common/utils/constants';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import Button from '../../../common/button/Button';

export interface TableToolsProps {
  application?: {
    date: string;
    type: string;
    status: ApplicationStatus;
  };
  handleReturn(): void;
}

const TableTools = ({ application, handleReturn }: TableToolsProps) => {
  const { t } = useTranslation();

  const renderTitle = () => {
    if (!application) return <Text size="l">{t('common.terminology.berths').toUpperCase()}</Text>;

    return (
      <>
        <Text size="l">
          {t('common.terminology.berths').toUpperCase()}: {application.type} {application.date}
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

export default TableTools;
