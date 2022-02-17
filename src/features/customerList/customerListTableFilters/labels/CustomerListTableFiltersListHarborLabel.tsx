import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  FILTER_HARBOR_LABEL,
  FILTER_HARBOR_LABELVariables as FILTER_HARBOR_LABEL_VAR,
} from '../../__generated__/FILTER_HARBOR_LABEL';
import { FILTER_HARBOR_LABEL_QUERY } from '../../queries';
import { NOT_FOUND_STRING } from '../constants';

interface Props {
  id: string;
}

const CustomerListTableFiltersListHarborKeyword = ({ id }: Props) => {
  const { data } = useQuery<FILTER_HARBOR_LABEL, FILTER_HARBOR_LABEL_VAR>(FILTER_HARBOR_LABEL_QUERY, {
    fetchPolicy: 'cache-first',
    variables: {
      harborId: id,
    },
  });

  return <>{data?.harbor?.properties?.name ?? NOT_FOUND_STRING}</>;
};

export default CustomerListTableFiltersListHarborKeyword;
