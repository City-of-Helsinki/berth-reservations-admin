import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './pierSelectHeader.module.scss';
import PierProperties from './pierProperties/PierProperties';
import { PierProperties as PierPropertiesT } from '../../../generated/types.d';

interface PierSelectHeaderProps {
  readonly className?: string;
  readonly piers: PierPropertiesT[];
  readonly selectedPier?: PierPropertiesT | null;
  onPierSelect(pier: PierPropertiesT | null): void;
  onEdit?(pier: PierPropertiesT): void;
}

const PierSelectHeader = ({ className, piers, selectedPier, onPierSelect, onEdit }: PierSelectHeaderProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.selectContainer}>
        <div>
          <button
            onClick={() => onPierSelect(null)}
            className={classNames(styles.pierButton, {
              [styles.pierButtonSelected]: !selectedPier,
            })}
          >
            {t('harborView.tableHeaders.all')}
          </button>
          {piers.map((pier) => (
            <button
              key={pier.identifier}
              onClick={() => onPierSelect(pier)}
              className={classNames(styles.pierButton, {
                [styles.pierButtonSelected]: selectedPier && selectedPier.identifier === pier.identifier,
              })}
            >
              {`${t('harborView.tableHeaders.identifier')} ${pier.identifier}`}
            </button>
          ))}
        </div>
        {selectedPier && (
          <button onClick={() => onEdit?.(selectedPier)} className={styles.editButton}>
            {t('harborView.tableHeaders.editPier')}
          </button>
        )}
      </div>
      {selectedPier && <PierProperties pier={selectedPier} />}
    </div>
  );
};

export default PierSelectHeader;
