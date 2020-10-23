import React from 'react';
import { useTranslation } from 'react-i18next';

import { isBerthBill } from '../utils';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import Section from '../../../common/section/Section';
import Grid from '../../../common/grid/Grid';
import CardBody from '../../../common/cardBody/CardBody';
import { formatDate, formatPrice } from '../../../common/utils/format';
import Text from '../../../common/text/Text';
import styles from './billingHistoryCard.module.scss';
import StatusLabel, { StatusLabelProps } from '../../../common/statusLabel/StatusLabel';
import { getOrderStatusTKey } from '../../../common/utils/translations';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';
import { Bill } from '../types';

interface BillingHistoryProps {
  bills: Bill[];
  onClick(bill: Bill): void;
}

const BillingHistoryCard = ({ bills, onClick }: BillingHistoryProps) => {
  const billStatusToColor = (billStatus: OrderStatus): StatusLabelProps['type'] => {
    switch (billStatus) {
      case OrderStatus.WAITING:
        return 'warning';
      case OrderStatus.PAID:
        return 'success';
      case OrderStatus.EXPIRED:
        return 'error';
      case OrderStatus.REJECTED:
      case OrderStatus.CANCELLED:
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const { t, i18n } = useTranslation();
  return (
    <Card>
      <CardHeader title={t('customerView.billingHistory.title')} />
      <CardBody>
        {bills.length > 0 ? (
          <Section title={t('customerView.billingHistory.sectionTitle')}>
            <Grid colsCount={4}>
              {bills.map((bill, id) => (
                <React.Fragment key={id}>
                  <button onClick={() => onClick(bill)} className={styles.gridItem}>
                    <Text color="brand">
                      {isBerthBill(bill)
                        ? t('customerView.billingHistory.berthBill')
                        : t('customerView.billingHistory.winterStorageBill')}
                    </Text>
                  </button>
                  <div className={styles.gridItem}>
                    <Text>{formatDate(bill.dueDate, i18n.language)}</Text>
                  </div>
                  <div className={styles.gridItem}>
                    <Text>{formatPrice(bill.totalPrice, i18n.language)}</Text>
                  </div>
                  <div className={styles.gridItem}>
                    <StatusLabel type={billStatusToColor(bill.status)} label={t(getOrderStatusTKey(bill.status))} />
                  </div>
                </React.Fragment>
              ))}
            </Grid>
          </Section>
        ) : (
          t('customerView.billingHistory.noBillingHistory')
        )}
      </CardBody>
    </Card>
  );
};

export default BillingHistoryCard;
