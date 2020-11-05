import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';

import styles from './globalSearchTableTools.module.scss';

export type GlobalSearchTableToolsProps = {
  defaultValue?: string;
  handleGlobalFilter: (value?: string) => void;
};

const GlobalSearchTableTools = ({ handleGlobalFilter, defaultValue }: GlobalSearchTableToolsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.globalSearchTableTools}>
      <TextInput
        defaultValue={defaultValue}
        className={styles.filterField}
        placeholder={t('common.search')}
        id="textSearchGlobalFilter"
        onChange={(e) => handleGlobalFilter((e.target as HTMLInputElement).value || undefined)}
      />
    </div>
  );
};

export default GlobalSearchTableTools;
