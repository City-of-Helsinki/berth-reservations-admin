import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import ContractDetails from './ContractDetails';
import { BERTH_CONTRACT_QUERY } from './queries';
import { BERTH_CONTRACT, BERTH_CONTRACTVariables as BERTH_CONTRACT_VARS } from './__generated__/BERTH_CONTRACT';

interface ContractDetailsContainerProps {
  leaseId: string;
}

const BerthContractDetailsContainer = ({ leaseId }: ContractDetailsContainerProps) => {
  const { data, loading } = useQuery<BERTH_CONTRACT, BERTH_CONTRACT_VARS>(BERTH_CONTRACT_QUERY, {
    variables: { leaseId },
  });

  if (loading || !data?.berthLease?.contract || !data.berthLease?.order) {
    return null;
  }

  const { status, modifiedAt, createdAt } = data.berthLease.contract;
  const documentId = data.berthLease.order.orderNumber;

  return <ContractDetails status={status} createdAt={createdAt} modifiedAt={modifiedAt} documentId={documentId} />;
};

export default BerthContractDetailsContainer;
