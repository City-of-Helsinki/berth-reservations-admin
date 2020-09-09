import React from 'react';
import { useTranslation } from 'react-i18next';

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

export interface ApplicationViewProps {
  customerProfile: CustomerProfileCardProps | null;
  noticeDetails: UnmarkedWsNoticeDetailsProps;
  winterStorageNotice: LinkApplicationToCustomerContainerProps['application'];
  handleLinkCustomer(customerId: string): void;
  handleDeleteNotice(): void;
}

const UnmarkedWsNoticeView = ({
  customerProfile,
  noticeDetails,
  winterStorageNotice,
  handleLinkCustomer,
  handleDeleteNotice,
}: ApplicationViewProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <div className={styles.fullWidth}>
        <PageTitle title={t('unmarkedWsNotices.view.title')} />
      </div>

      <div className={styles.buttons}>
        <Button onClick={handleDeleteNotice} variant="secondary">
          {t('unmarkedWsNotices.deleteNotice')}
        </Button>
      </div>

      {customerProfile ? (
        <>
          <CustomerProfileCard {...customerProfile} />
          <ActionHistoryCard />
        </>
      ) : (
        <LinkApplicationToCustomerContainer application={winterStorageNotice} handleLinkCustomer={handleLinkCustomer} />
      )}

      {noticeDetails && (
        <Card className={styles.fullWidth}>
          <CardHeader title={t('unmarkedWsNotices.noticeDetails.title').toUpperCase()} />
          <CardBody>
            <UnmarkedWsNoticeDetails {...noticeDetails} />
          </CardBody>
        </Card>
      )}
    </PageContent>
  );
};

export default UnmarkedWsNoticeView;
