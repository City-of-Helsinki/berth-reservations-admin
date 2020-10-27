import React from 'react';
import { useTranslation } from 'react-i18next';

import { isBerthInvoice } from '../utils';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import Section from '../../../common/section/Section';
import Grid from '../../../common/grid/Grid';
import CardBody from '../../../common/cardBody/CardBody';
import { formatDate, formatPrice } from '../../../common/utils/format';
import Text from '../../../common/text/Text';
import styles from './invoicingHistoryCard.module.scss';
import StatusLabel, { StatusLabelProps } from '../../../common/statusLabel/StatusLabel';
import { getOrderStatusTKey } from '../../../common/utils/translations';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';
import { Invoice } from '../types';

interface InvoicingHistoryProps {
  invoices: Invoice[];
  onClick(invoice: Invoice): void;
}

const InvoicingHistoryCard = ({ invoices, onClick }: InvoicingHistoryProps) => {
  const invoiceStatusToType = (invoiceStatus: OrderStatus): StatusLabelProps['type'] => {
    switch (invoiceStatus) {
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
      <CardHeader title={t('customerView.invoicingHistory.title')} />
      <CardBody>
        {invoices.length > 0 ? (
          <Section title={t('common.terminology.invoices').toUpperCase()}>
            <Grid colsCount={4}>
              {invoices.map((invoice, id) => (
                <React.Fragment key={id}>
                  <button onClick={() => onClick(invoice)} className={styles.gridItem}>
                    <Text color="brand">
                      {isBerthInvoice(invoice)
                        ? t('common.terminology.berthRent')
                        : t('common.terminology.winterStoragePlaceRent')}
                    </Text>
                  </button>
                  <div className={styles.gridItem}>
                    <Text>{formatDate(invoice.dueDate, i18n.language)}</Text>
                  </div>
                  <div className={styles.gridItem}>
                    <Text>{formatPrice(invoice.totalPrice, i18n.language)}</Text>
                  </div>
                  <div className={styles.gridItem}>
                    <StatusLabel
                      type={invoiceStatusToType(invoice.status)}
                      label={t(getOrderStatusTKey(invoice.status))}
                    />
                  </div>
                </React.Fragment>
              ))}
            </Grid>
          </Section>
        ) : (
          t('customerView.invoicingHistory.noInvoicingHistory')
        )}
      </CardBody>
    </Card>
  );
};

export default InvoicingHistoryCard;
