import { GetRecoilValue, RecoilValue } from 'recoil';
import { SortingRule } from 'react-table';

export const orderByToString = <T>(sortBy: SortingRule<T>[]) => {
  if (!sortBy.length) {
    return undefined;
  }

  return `${sortBy[0].desc ? '-' : ''}${sortBy[0].id}`;
};

export const orderByGetter = <T>(sortByValue: RecoilValue<SortingRule<T>[]>) => ({ get }: { get: GetRecoilValue }) => {
  const sortBy = get(sortByValue);

  return orderByToString(sortBy);
};
