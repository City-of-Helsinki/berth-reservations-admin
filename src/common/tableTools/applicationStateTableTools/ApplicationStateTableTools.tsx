import React from 'react';
import { useTranslation } from 'react-i18next';

import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import Select from '../../select/Select';
import { APPLICATION_STATUS } from '../../utils/constants';
import styles from './applicationStateTableTools.module.scss';

interface ApplicationStateTableToolsProps {
  count?: number;
  statusFilter?: ApplicationStatus;
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
}

const ApplicationStateTableTools = ({ count, statusFilter, onStatusFilterChange }: ApplicationStateTableToolsProps) => {
  const { t } = useTranslation();
  const options = [
    { label: t('common.all'), value: '' as ApplicationStatus },
    ...Object.values(ApplicationStatus).map((status) => {
      return { label: t(APPLICATION_STATUS[status].label), value: status };
    }),
  ];
  return (
    <div className={styles.container}>
      <span>{t('applicationStateTableTools.count', { count: count ?? 0 })}</span>
      <Select
        label={t('applicationStateTableTools.selectLabel')}
        className={styles.select}
        onChange={(e) =>
          (e.target.value as string) === '' ? onStatusFilterChange(undefined) : onStatusFilterChange(e.target.value)
        }
        value={statusFilter ?? ('' as ApplicationStatus)}
        options={options}
        visibleOptions={options.length + 1}
      />
    </div>
  );
};

export default ApplicationStateTableTools;
