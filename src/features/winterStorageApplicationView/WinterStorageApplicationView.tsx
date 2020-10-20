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
  customerProfile: CustomerProfileCardProps | null;
  applicationDetails: ApplicationDetailsProps;
  winterStorageApplication: LinkApplicationToCustomerContainerProps['application'];
  handleLinkCustomer(customerId: string): void;
  handleEditCustomer(): void;
  handleDeleteLease(id: string): void;
  handleUnlinkCustomer(): void;
}

const WinterStorageApplicationView = ({
  customerProfile,
  applicationDetails,
  winterStorageApplication,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
  handleUnlinkCustomer,
}: ApplicationViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <PageTitle title={t('applicationView.winterStorageTitle')} />

      <ApplicationHeader
        text={t('applicationList.applicationType.newApplication')}
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
