import React from 'react';

import HarborList from './HarborList';
import { useHarborsQuery } from '../../generated/types.d';
import { edgesToArr } from '../../generated/utils';

const HarborListContainer = () => {
  const { loading, data } = useHarborsQuery();
  const harbors = edgesToArr(data?.harbors);

  return <HarborList data={harbors} loading={loading} />;
};

export default HarborListContainer;
