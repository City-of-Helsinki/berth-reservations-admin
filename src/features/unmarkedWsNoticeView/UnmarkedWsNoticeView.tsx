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
import Chip from '../../common/chip/Chip';
import { APPLICATION_STATUS } from '../../common/utils/consonants';
import Grid from '../../common/grid/Grid';
import InvoiceCard from '../invoiceCard/InvoiceCardContainer';
import { Order } from '../invoiceCard/types';

export interface UnmarkedWsNoticeViewProps {
  customerProfile: CustomerProfileCardProps | null;
  noticeDetails: UnmarkedWsNoticeDetailsProps;
  order: Order | null;
  refetchQueries: PureQueryOptions[] | string[];
  winterStorageNotice: LinkApplicationToCustomerContainerProps['application'];
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
  refetchQueries,
  winterStorageNotice,
  handleCreateLease,
  handleDeleteNotice,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
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
          <Chip
            color={APPLICATION_STATUS[noticeDetails.status].color}
            label={t(APPLICATION_STATUS[noticeDetails.status].label)}
          />
        </div>
        <div className={styles.actionsRight}>
          <Button onClick={handleDeleteNotice} variant="secondary">
            {t('unmarkedWsNotices.view.deleteNotice')}
          </Button>
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
                  <Chip color={'green'} label="Lasku luotu" />
                ) : (
                  <Button onClick={handleCreateLease}>{t('unmarkedWsNotices.view.createInvoice')}</Button>
                ))}
            </div>
          </Grid>
        </CardBody>
      </Card>

      {order && (
        <InvoiceCard
          buttonsRight={
            <Button variant="secondary" theme="coat" onClick={handleDeleteLease}>
              {t('unmarkedWsNotices.view.deleteInvoice')}
            </Button>
          }
          className={styles.fullWidth}
          customerEmail={null}
          order={order as Order}
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
