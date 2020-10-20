import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import styles from './applicationView.module.scss';
import Card from '../../common/card/Card';
import CardBody from '../../common/cardBody/CardBody';
import ApplicationDetails, { ApplicationDetailsProps } from '../../common/applicationDetails/ApplicationDetails';
import CardHeader from '../../common/cardHeader/CardHeader';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import BerthOfferCard, { BerthOfferCardProps } from './berthOfferCard/BerthOfferCard';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import LinkApplicationToCustomerContainer, {
  LinkApplicationToCustomerContainerProps,
} from '../linkApplicationToCustomer/LinkApplicationToCustomerContainer';
import ApplicationHeader from '../../common/applicationHeader/ApplicationHeader';

export enum SearchBy {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  ADDRESS = 'address',
}

export interface ApplicationViewProps {
  applicationDetails: ApplicationDetailsProps;
  berthApplication: LinkApplicationToCustomerContainerProps['application'];
  customerProfile: CustomerProfileCardProps | null;
  leaseDetails: BerthOfferCardProps['leaseDetails'] | null;
  refetchQueries: PureQueryOptions[] | string[];
  isDeletingLease: boolean;
  handleDeleteLease(id: string): void;
  handleEditCustomer(): void;
  handleLinkCustomer(customerId: string): void;
  handleUnlinkCustomer(): void;
}

const ApplicationView = ({
  applicationDetails,
  berthApplication,
  customerProfile,
  leaseDetails,
  refetchQueries,
  isDeletingLease,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
  handleUnlinkCustomer,
}: ApplicationViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <PageTitle title={t('applicationView.title')} />

      <ApplicationHeader
        text={
          applicationDetails.berthSwitch !== null
            ? t('applicationList.applicationType.switchApplication')
            : t('applicationList.applicationType.newApplication')
        }
        createdAt={applicationDetails.createdAt}
        status={applicationDetails.status}
        customerId={applicationDetails.customerId}
        handleUnlinkCustomer={handleUnlinkCustomer}
      />

      {customerProfile ? (
        <>
          <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />
          <ActionHistoryCard />
        </>
      ) : (
        <LinkApplicationToCustomerContainer application={berthApplication} handleLinkCustomer={handleLinkCustomer} />
      )}

      <Card className={styles.fullWidth}>
        <CardHeader title={t('applicationView.applicationDetails.title')} />
        <CardBody>
          <ApplicationDetails {...applicationDetails} handleDeleteLease={handleDeleteLease} />
        </CardBody>
      </Card>

      {leaseDetails && (
        <BerthOfferCard
          className={styles.fullWidth}
          applicationStatus={applicationDetails.status}
          leaseDetails={leaseDetails}
          handleDeleteLease={handleDeleteLease}
          isDeletingLease={isDeletingLease}
          refetchQueries={refetchQueries}
        />
      )}
    </PageContent>
  );
};

export default ApplicationView;
