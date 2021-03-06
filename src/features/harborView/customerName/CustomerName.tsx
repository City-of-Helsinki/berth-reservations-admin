import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import { CUSTOMER_NAME_QUERY } from './queries';
import { CUSTOMER_NAME } from './__generated__/CUSTOMER_NAME';
import InternalLink from '../../../common/internalLink/InternalLink';
import LoadingCell from '../../../common/table/loadingCell/LoadingCell';

export interface CustomerNameProps {
  id: string;
  linkTo?: string;
}

const CustomerName = ({ id, linkTo }: CustomerNameProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<CUSTOMER_NAME>(CUSTOMER_NAME_QUERY, {
    variables: {
      customerId: id,
    },
  });

  if (loading) return <LoadingCell />;
  if (!data?.profile) return <InternalLink to={`/customers/${id}`}>{t('common.emptyName')}</InternalLink>;

  return (
    <InternalLink
      to={linkTo || `/customers/${id}`}
    >{`${data.profile.lastName} ${data.profile.firstName}`}</InternalLink>
  );
};

export default CustomerName;
