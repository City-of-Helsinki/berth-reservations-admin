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
  isDeletingApplication: boolean;
  isDeletingLease: boolean;
  leaseDetails: BerthOfferCardProps['leaseDetails'] | null;
  refetchQueries: PureQueryOptions[] | string[];
  handleDeleteApplication(): void;
  handleDeleteLease(id: string): void;
  handleEditCustomer(): void;
  handleLinkCustomer(customerId: string): void;
  handleNoPlacesAvailable(id: string): void;
  handleUnlinkCustomer(): void;
}

const ApplicationView = ({
  applicationDetails,
  berthApplication,
  customerProfile,
  handleDeleteApplication,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
  handleNoPlacesAvailable,
  handleUnlinkCustomer,
  isDeletingApplication,
  isDeletingLease,
  leaseDetails,
  refetchQueries,
}: ApplicationViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <PageTitle title={t('applicationView.title')} />

      <ApplicationHeader
        createdAt={applicationDetails.createdAt}
        customerId={applicationDetails.customerId}
        handleDeleteApplication={handleDeleteApplication}
        handleUnlinkCustomer={handleUnlinkCustomer}
        isDeletingApplication={isDeletingApplication}
        status={applicationDetails.status}
        text={
          applicationDetails.berthSwitch !== null
            ? t('applicationList.applicationType.switchApplication')
            : t('applicationList.applicationType.newApplication')
        }
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
          <ApplicationDetails
            {...applicationDetails}
            handleDeleteLease={handleDeleteLease}
            handleNoPlacesAvailable={handleNoPlacesAvailable}
          />
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
