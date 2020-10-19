import { GetRecoilValue, RecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

export const orderByGetter = <T>(sortByValue: RecoilValue<SortingRule<T>[]>) => ({ get }: { get: GetRecoilValue }) => {
  const sortBy = get(sortByValue);

  if (!sortBy.length) {
    return undefined;
  }

  return `${sortBy[0].desc ? '-' : ''}${sortBy[0].id}`;
};
