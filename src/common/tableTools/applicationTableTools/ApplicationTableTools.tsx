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
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
}

const ApplicationTableTools = ({
  count,
  nameFilter,
  onNameFilterChange,
  statusFilter,
  onStatusFilterChange,
}: ApplicationTableToolsProps) => {
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
          onChange={(e) =>
            (e.target.value as string) === '' ? onStatusFilterChange(undefined) : onStatusFilterChange(e.target.value)
          }
          value={statusFilter ?? ('' as ApplicationStatus)}
          options={options}
          visibleOptions={options.length + 1}
        />
      </div>
    </div>
  );
};

export default ApplicationTableTools;
