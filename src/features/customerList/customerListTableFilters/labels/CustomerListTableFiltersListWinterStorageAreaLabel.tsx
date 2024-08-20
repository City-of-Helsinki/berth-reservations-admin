import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  FILTER_WINTER_STORAGE_AREA_LABEL,
  FILTER_WINTER_STORAGE_AREA_LABELVariables as FILTER_WINTER_STORAGE_AREA_LABEL_VAR,
} from '../../__generated__/FILTER_WINTER_STORAGE_AREA_LABEL';
import { FILTER_WINTER_STORAGE_AREA_LABEL_QUERY } from '../../queries';
import { NOT_FOUND_STRING } from '../constants';

interface Props {
  id: string;
}

const CustomerListTableFiltersListHarborKeyword = ({ id }: Props) => {
  const { data } = useQuery<FILTER_WINTER_STORAGE_AREA_LABEL, FILTER_WINTER_STORAGE_AREA_LABEL_VAR>(
    FILTER_WINTER_STORAGE_AREA_LABEL_QUERY,
    {
      fetchPolicy: 'cache-first',
      variables: {
        winterStorageAreaId: id,
      },
    }
  );

  return <>{data?.winterStorageArea?.properties?.name ?? NOT_FOUND_STRING}</>;
};

export default CustomerListTableFiltersListHarborKeyword;
