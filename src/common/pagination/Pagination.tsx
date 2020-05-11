import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import Icon from '../icons/Icon';
import Text from '../text/Text';
import styles from './pagination.module.scss';

export type PaginationProps = Pick<
  ReactPaginateProps,
  'pageCount' | 'onPageChange' | 'initialPage' | 'forcePage'
> & {
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({ className, ...rest }) => {
  const { t } = useTranslation();

  return (
    <ReactPaginate
      {...rest}
      previousLabel={
        <div className={styles.icnBtn}>
          <Icon shape="IconArrowLeft" color="brand" />
          <Text>{t('common.previous')}</Text>
        </div>
      }
      nextLabel={
        <div className={styles.icnBtn}>
          <Text>{t('common.next')}</Text>
          <Icon shape="IconArrowRight" color="brand" />
        </div>
      }
      previousClassName={styles.prevBtn}
      nextClassName={styles.nextBtn}
      previousLinkClassName={styles.navLink}
      nextLinkClassName={styles.navLink}
      disabledClassName={styles.disabled}
      pageLinkClassName={classNames(styles.navLink, styles.pageLink)}
      pageClassName={styles.pageBtn}
      breakLabel={'...'}
      breakClassName={styles.break}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      activeLinkClassName={styles.active}
      containerClassName={classNames(styles.pagination, className)}
    />
  );
};

export default Pagination;
