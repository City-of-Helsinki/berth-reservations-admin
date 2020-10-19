import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { atom, selector, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

import UnmarkedWsNoticeList from './UnmarkedWsNoticeList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import {
  UNMARKED_WINTER_STORAGE_NOTICES,
  UNMARKED_WINTER_STORAGE_NOTICESVariables as UNMARKED_WINTER_STORAGE_NOTICES_VARS,
} from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { UNMARKED_WINTER_STORAGE_NOTICES_QUERY } from './queries';
import { getUnmarkedWinterStorageNotices } from './utils';
import { ApplicationData } from '../applicationList/utils';
import { orderByGetter } from '../../common/utils/recoil';

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'UnmarkedWsNoticeListContainer_sortByAtom',
  default: [{ id: 'createdAt', desc: false }],
});

const orderBySelector = selector<string | undefined>({
  key: 'UnmarkedWsNoticeListContainer_orderBySelector',
  get: orderByGetter(sortByAtom),
});

const UnmarkedWsNoticeListContainer = () => {
  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const { loading, data } = useQuery<UNMARKED_WINTER_STORAGE_NOTICES, UNMARKED_WINTER_STORAGE_NOTICES_VARS>(
    UNMARKED_WINTER_STORAGE_NOTICES_QUERY,
    {
      variables: {
        first: pageSize,
        after: cursor,
        orderBy,
      },
    }
  );
  const notices = getUnmarkedWinterStorageNotices(data);
  const pageCount = getPageCount(data?.winterStorageNotices?.count);

  return (
    <UnmarkedWsNoticeList
      notices={notices}
      loading={loading}
      pageCount={pageCount}
      pageIndex={pageIndex}
      goToPage={goToPage}
      sortBy={sortBy}
      onSortedColsChange={handleSortedColsChange}
    />
  );
};

export default UnmarkedWsNoticeListContainer;
