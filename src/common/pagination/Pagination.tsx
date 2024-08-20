import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconArrowLeft, IconArrowRight } from 'hds-react';
import Text from '../text/Text';
import styles from './pagination.module.scss';

export interface PaginationProps {
  className?: string;
  pageIndex: number;
  pageCount: number;
  onPageChange(selectedItem: { selected: number }): void;
}

const Pagination = ({ className, pageIndex, pageCount, onPageChange }: PaginationProps) => {
  const { t } = useTranslation();

  const options: JSX.Element[] = [];

  for (let index = 0; index < pageCount; index += 1) {
    options.push(
      <option key={index} value={index}>
        {index + 1}
      </option>
    );
  }

  const isFirstPage = pageIndex === 0;
  const isLastPage = pageCount - 1 === pageIndex;

  const handlePrev = () => onPageChange?.({ selected: pageIndex - 1 });
  const handleNext = () => onPageChange?.({ selected: pageIndex + 1 });

  return (
    <div className={classNames(styles.pagination, className)}>
      <button
        className={classNames(styles.prevBtn, { [styles.disabled]: isFirstPage })}
        onClick={handlePrev}
        disabled={isFirstPage}
      >
        <IconArrowLeft size="m" className={styles.icon} />
        <Text>{t('common.previous')}</Text>
      </button>
      <div>
        <div className={styles.selectContainer}>
          <select
            className={styles.select}
            value={pageIndex}
            onChange={(e) => onPageChange?.({ selected: Number(e.target.value) })}
          >
            {options}
          </select>
        </div>
        /{' '}
        <button onClick={() => onPageChange?.({ selected: pageCount - 1 })}>
          <Text underlined>{pageCount}</Text>
        </button>
      </div>
      <button
        className={classNames(styles.nextBtn, { [styles.disabled]: isLastPage })}
        onClick={handleNext}
        disabled={isLastPage}
      >
        <Text>{t('common.next')}</Text>
        <IconArrowRight size="m" className={styles.icon} />
      </button>
    </div>
  );
};

export default Pagination;
