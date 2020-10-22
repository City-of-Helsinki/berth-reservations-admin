import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './winterStorageApplicationView.module.scss';
import Card from '../../common/card/Card';
import CardBody from '../../common/cardBody/CardBody';
import ApplicationDetails, { ApplicationDetailsProps } from '../../common/applicationDetails/ApplicationDetails';
import CardHeader from '../../common/cardHeader/CardHeader';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import LinkApplicationToCustomerContainer, {
  LinkApplicationToCustomerContainerProps,
} from '../linkApplicationToCustomer/LinkApplicationToCustomerContainer';
import ApplicationHeader from '../../common/applicationHeader/ApplicationHeader';

export interface ApplicationViewProps {
  applicationDetails: ApplicationDetailsProps;
  customerProfile: CustomerProfileCardProps | null;
  isDeleteApplicationLoading: boolean;
  winterStorageApplication: LinkApplicationToCustomerContainerProps['application'];
  handleDeleteApplication(): void;
  handleDeleteLease(id: string): void;
  handleEditCustomer(): void;
  handleLinkCustomer(customerId: string): void;
  handleUnlinkCustomer(): void;
}

const WinterStorageApplicationView = ({
  applicationDetails,
  customerProfile,
  handleDeleteApplication,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
  handleUnlinkCustomer,
  isDeleteApplicationLoading,
  winterStorageApplication,
}: ApplicationViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <PageTitle title={t('applicationView.winterStorageTitle')} />

      <ApplicationHeader
        createdAt={applicationDetails.createdAt}
        customerId={applicationDetails.customerId}
        handleDeleteApplication={handleDeleteApplication}
        handleUnlinkCustomer={handleUnlinkCustomer}
        isDeleteApplicationLoading={isDeleteApplicationLoading}
        status={applicationDetails.status}
        text={t('applicationList.applicationType.newApplication')}
      />

      {customerProfile ? (
        <>
          <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />
          <ActionHistoryCard />
        </>
      ) : (
        <LinkApplicationToCustomerContainer
          application={winterStorageApplication}
          handleLinkCustomer={handleLinkCustomer}
        />
      )}

      <Card className={styles.fullWidth}>
        <CardHeader title={t('applicationView.applicationDetails.title')} />
        <CardBody>
          <ApplicationDetails {...applicationDetails} handleDeleteLease={handleDeleteLease} />
        </CardBody>
      </Card>

      {/*  TODO: Offer and invoicing */}
    </PageContent>
  );
};

export default WinterStorageApplicationView;
