import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';

import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import Select from '../../select/Select';
import { APPLICATION_STATUS } from '../../utils/constants';
import styles from './applicationTableTools.module.scss';

interface ApplicationTableToolsProps {
  count?: number;
  nameFilter?: string;
  statusFilter?: ApplicationStatus;
  onNameFilterChange(nameFilter: string | undefined): void;
  onStatusFilterChange(statusFilter?: ApplicationStatus | null): void;
}

const ApplicationTableTools = ({
  count,
  nameFilter,
  statusFilter,
  onNameFilterChange,
  onStatusFilterChange,
}: ApplicationTableToolsProps) => {
  const { t } = useTranslation();
  const options = [
    { label: t('common.all'), value: '' as ApplicationStatus },
    ...Object.entries(APPLICATION_STATUS).map(([key, value]) => {
      return { label: t(value.label), value: ApplicationStatus[key as ApplicationStatus] };
    }),
  ];
  return (
    <div className={styles.container}>
      <span>{t('applicationStateTableTools.count', { count: count ?? 0 })}</span>
      <div className={styles.filtersContainer}>
        <TextInput
          id="applicationStateTableTools_nameFilter"
          label={t('applicationStateTableTools.nameFilterLabel')}
          onChange={(e) => onNameFilterChange((e.target as HTMLInputElement).value || undefined)}
          value={nameFilter ?? ''}
        />
        <Select
          label={t('applicationStateTableTools.selectLabel')}
          className={styles.select}
          onChange={(e) => onStatusFilterChange(e.target.value || undefined)}
          value={statusFilter ?? ('' as ApplicationStatus)}
          options={options}
          visibleOptions={options.length + 1}
        />
      </div>
    </div>
  );
};

export default ApplicationTableTools;
