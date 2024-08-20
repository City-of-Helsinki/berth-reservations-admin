import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { CUSTOMER_NAME_QUERY } from './queries';
import { CUSTOMER_NAME } from './__generated__/CUSTOMER_NAME';
import InternalLink from '../../../common/internalLink/InternalLink';
import LoadingCell from '../../../common/table/loadingCell/LoadingCell';
import Text from '../../../common/text/Text';

export interface CustomerNameProps {
  id: string;
  linkTo?: string;
  disabled?: boolean;
  displayPlaceholder?: boolean;
}

const CustomerName = ({ id, linkTo, disabled, displayPlaceholder }: CustomerNameProps) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<CUSTOMER_NAME>(CUSTOMER_NAME_QUERY, {
    skip: !id,
    variables: {
      customerId: id,
    },
  });

  if (!displayPlaceholder && !data) {
    return null;
  }
  if (loading) return <LoadingCell />;
  if (disabled && data?.profile)
    return <Text color="secondary">{`${data.profile.lastName} ${data.profile.firstName}`}</Text>;
  if (!data?.profile) return <InternalLink to={`/customers/${id}`}>{t('common.emptyName')}</InternalLink>;

  return (
    <InternalLink
      to={linkTo || `/customers/${id}`}
    >{`${data.profile.lastName} ${data.profile.firstName}`}</InternalLink>
  );
};

export default CustomerName;
