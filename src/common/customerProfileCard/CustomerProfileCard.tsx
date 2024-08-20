import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import PrivateCustomerDetails, { PrivateCustomerDetailsProps } from '../privateCustomerDetails/PrivateCustomerDetails';
import OrganizationCustomerDetails, {
  OrganizationCustomerDetailsProps,
} from '../organizationCustomerDetails/OrganizationCustomerDetails';
import Text from '../text/Text';

export type CustomerProfileCardProps = {
  className?: string;
  handleEditCustomer?: () => void;
} & (PrivateCustomerDetailsProps | OrganizationCustomerDetailsProps);

const renderDetails = (props: CustomerProfileCardProps) => {
  if ('organization' in props && props.organization !== null) {
    return <OrganizationCustomerDetails {...props} />;
  } else {
    return <PrivateCustomerDetails {...props} />;
  }
};

const CustomerProfileCard = ({ className, handleEditCustomer, ...rest }: CustomerProfileCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className={className}>
      <CardHeader title={t('customerProfile.title').toUpperCase()}>
        {handleEditCustomer && (
          <button onClick={handleEditCustomer}>
            <Text weight="normalWeight">{t('common.edit')}</Text>
          </button>
        )}
      </CardHeader>
      <CardBody>{renderDetails(rest)}</CardBody>
    </Card>
  );
};

export default CustomerProfileCard;
