import React from 'react';
import { useTranslation } from 'react-i18next';

import { isAdditionalProductInvoice } from '../utils';
import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import Section from '../../../common/section/Section';
import Grid from '../../../common/grid/Grid';
import CardBody from '../../../common/cardBody/CardBody';
import { formatDate, formatPrice } from '../../../common/utils/format';
import Text from '../../../common/text/Text';
import styles from './invoicingHistoryCard.module.scss';
import StatusLabel, { StatusLabelProps } from '../../../common/statusLabel/StatusLabel';
import { getInvoiceTypeKey, getOrderStatusTKey } from '../../../common/utils/translations';
import { OrderStatus } from '../../../@types/__generated__/globalTypes';
import { Invoice } from '../types';
import Button from '../../../common/button/Button';

interface InvoicingHistoryProps {
  invoices: Invoice[];
  onClick(invoice: Invoice): void;
  onClickCreateAdditionalInvoice(): void;
}

const InvoicingHistoryCard = ({ invoices, onClick, onClickCreateAdditionalInvoice }: InvoicingHistoryProps) => {
  const { t, i18n } = useTranslation();

  const invoiceStatusToType = (invoiceStatus: OrderStatus): StatusLabelProps['type'] => {
    switch (invoiceStatus) {
      case OrderStatus.WAITING:
        return 'warning';
      case OrderStatus.PAID:
        return 'success';
      case OrderStatus.EXPIRED:
      case OrderStatus.ERROR:
        return 'error';
      case OrderStatus.REJECTED:
      case OrderStatus.CANCELLED:
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const getRows = () =>
    invoices.map((invoice, id) => (
      <React.Fragment key={id}>
        <button onClick={() => onClick(invoice)} className={styles.gridItem}>
          <Text color="brand">{t(getInvoiceTypeKey(invoice))}</Text>
        </button>
        <div className={styles.gridItem}>
          <Text>
            {isAdditionalProductInvoice(invoice)
              ? '-'
              : `${formatDate(invoice.contractPeriod.startDate, i18n.language)} - ${formatDate(
                  invoice.contractPeriod.endDate,
                  i18n.language
                )}`}
          </Text>
        </div>
        <div className={styles.gridItem}>
          <Text>{formatDate(invoice.dueDate, i18n.language)}</Text>
        </div>
        <div className={styles.gridItem}>
          <Text>{formatPrice(invoice.totalPrice, i18n.language)}</Text>
        </div>
        <div className={styles.gridItem}>
          <StatusLabel type={invoiceStatusToType(invoice.status)} label={t(getOrderStatusTKey(invoice.status))} />
        </div>
      </React.Fragment>
    ));

  return (
    <Card>
      <CardHeader title={t('customerView.invoicingHistory.title')} />
      <CardBody>
        <div>
          <Button onClick={onClickCreateAdditionalInvoice}>{t('additionalInvoice.create')}</Button>
        </div>
        {invoices.length > 0 ? (
          <Section>
            <Grid colsCount={5}>
              <div className={styles.gridHeader}>Tyyppi</div>
              <div className={styles.gridHeader}>Kausi</div>
              <div className={styles.gridHeader}>Eräpäivä</div>
              <div className={styles.gridHeader}>Summa</div>
              <div className={styles.gridHeader}>Tila</div>
              {getRows()}
            </Grid>
          </Section>
        ) : (
          <Section>{t('customerView.invoicingHistory.noInvoicingHistory')}</Section>
        )}
      </CardBody>
    </Card>
  );
};

export default InvoicingHistoryCard;
