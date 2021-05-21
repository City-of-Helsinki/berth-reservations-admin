import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import ContractDetails from './ContractDetails';
import { WINTER_STORAGE_CONTRACT_QUERY } from './queries';
import {
  WINTER_STORAGE_CONTRACT,
  WINTER_STORAGE_CONTRACTVariables as WINTER_STORAGE_CONTRACT_VARS,
} from './__generated__/WINTER_STORAGE_CONTRACT';

interface Props {
  leaseId: string;
}

const WinterStorageContractDetailsContainer = ({ leaseId }: Props) => {
  const { data, loading } = useQuery<WINTER_STORAGE_CONTRACT, WINTER_STORAGE_CONTRACT_VARS>(
    WINTER_STORAGE_CONTRACT_QUERY,
    { variables: { leaseId } }
  );

  if (loading || !data?.winterStorageLease?.contract || !data.winterStorageLease?.order) {
    return null;
  }

  const { status, modifiedAt, createdAt } = data.winterStorageLease.contract;
  const documentId = data.winterStorageLease.order.orderNumber;

  return <ContractDetails status={status} createdAt={createdAt} modifiedAt={modifiedAt} documentId={documentId} />;
};

export default WinterStorageContractDetailsContainer;
