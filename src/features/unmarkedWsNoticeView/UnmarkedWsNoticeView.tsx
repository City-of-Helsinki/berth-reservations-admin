import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import styles from './unmarkedWsNoticeView.module.scss';
import Card from '../../common/card/Card';
import CardBody from '../../common/cardBody/CardBody';
import CardHeader from '../../common/cardHeader/CardHeader';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import LinkApplicationToCustomerContainer, {
  LinkApplicationToCustomerContainerProps,
} from '../linkApplicationToCustomer/LinkApplicationToCustomerContainer';
import Button from '../../common/button/Button';
import UnmarkedWsNoticeDetails, {
  UnmarkedWsNoticeDetailsProps,
} from '../../common/unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import Text from '../../common/text/Text';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import Grid from '../../common/grid/Grid';
import InvoiceCard from '../invoiceCard/InvoiceCardContainer';
import { Order } from '../invoiceCard/types';
import DeleteButton from '../../common/deleteButton/DeleteButton';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';
import { canDeleteApplication } from '../../common/utils/applicationUtils';
import { canDeleteLease } from '../../common/utils/leaseUtils';

export interface UnmarkedWsNoticeViewProps {
  customerProfile: CustomerProfileCardProps | null;
  noticeDetails: UnmarkedWsNoticeDetailsProps;
  leaseStatus: LeaseStatus | null;
  order: Order | null;
  refetchQueries: PureQueryOptions[] | string[];
  winterStorageNotice: LinkApplicationToCustomerContainerProps['application'];
  isDeleteNoticeLoading: boolean;
  isCreateLeaseLoading: boolean;
  isDeleteLeaseLoading: boolean;
  handleCreateLease(): void;
  handleDeleteLease(): void;
  handleDeleteNotice(): void;
  handleEditCustomer(): void;
  handleLinkCustomer(customerId: string): void;
}

const UnmarkedWsNoticeView = ({
  customerProfile,
  noticeDetails,
  order,
  leaseStatus,
  refetchQueries,
  winterStorageNotice,
  handleCreateLease,
  handleDeleteNotice,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
  isDeleteNoticeLoading,
  isCreateLeaseLoading,
  isDeleteLeaseLoading,
}: UnmarkedWsNoticeViewProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <PageContent className={styles.noticeView}>
      <div className={styles.fullWidth}>
        <PageTitle title={t('unmarkedWsNotices.view.title')} />
      </div>

      <div className={styles.actions}>
        <div className={styles.noticeStatus}>
          <Text as="h2" size="xl" weight="normalWeight">
            {t('applicationList.applicationType.notice')} {formatDate(noticeDetails.createdAt, language)}
          </Text>
          <StatusLabel
            type={APPLICATION_STATUS[noticeDetails.status].type}
            label={t(APPLICATION_STATUS[noticeDetails.status].label)}
          />
        </div>
        <div className={styles.actionsRight}>
          {canDeleteApplication(noticeDetails.status) && (
            <DeleteButton
              buttonText={t('unmarkedWsNotices.view.deleteNotice')}
              onConfirm={handleDeleteNotice}
              disabled={isDeleteNoticeLoading}
            />
          )}
        </div>
      </div>

      {customerProfile ? (
        <>
          <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />
          <ActionHistoryCard />
        </>
      ) : (
        <LinkApplicationToCustomerContainer application={winterStorageNotice} handleLinkCustomer={handleLinkCustomer} />
      )}

      <Card className={styles.fullWidth}>
        <CardHeader title={t('unmarkedWsNotices.noticeDetails.title').toUpperCase()} />
        <CardBody>
          <Grid colsCount={3}>
            <UnmarkedWsNoticeDetails {...noticeDetails} />
            <div className={styles.detailsActions}>
              {customerProfile &&
                (order ? (
                  <StatusLabel type="success" label="Lasku luotu" />
                ) : (
                  <Button onClick={handleCreateLease} disabled={isCreateLeaseLoading}>
                    {t('unmarkedWsNotices.view.createInvoice')}
                  </Button>
                ))}
            </div>
          </Grid>
        </CardBody>
      </Card>

      {order && (
        <InvoiceCard
          applicationStatus={noticeDetails.status}
          buttonsRight={
            canDeleteLease(leaseStatus) && (
              <DeleteButton
                buttonText={t('unmarkedWsNotices.view.deleteInvoice')}
                onConfirm={handleDeleteLease}
                disabled={isDeleteLeaseLoading}
              />
            )
          }
          className={styles.fullWidth}
          customerEmail={customerProfile?.primaryEmail ?? null}
          order={order}
          placeDetails={<p>{t('common.terminology.unmarkedWinterStoragePlace')}</p>}
          placeName={noticeDetails.choice.winterStorageAreaName}
          placeProperties={[]}
          placeType={t('common.terminology.unmarkedWinterStoragePlace').toUpperCase()}
          refetchQueries={refetchQueries}
          title={t('common.terminology.invoice').toUpperCase()}
        />
      )}
    </PageContent>
  );
};

export default UnmarkedWsNoticeView;
