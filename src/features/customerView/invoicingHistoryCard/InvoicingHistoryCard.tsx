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
import StatusLabel from '../../../common/statusLabel/StatusLabel';
import { getInvoiceTypeKey } from '../../../common/utils/translations';
import { Invoice } from '../types';
import Button from '../../../common/button/Button';
import { ORDER_STATUS } from '../../../common/utils/constants';

interface InvoicingHistoryProps {
  invoices: Invoice[];
  onClick(invoice: Invoice): void;
  onClickCreateAdditionalInvoice(): void;
}

const InvoicingHistoryCard = ({ invoices, onClick, onClickCreateAdditionalInvoice }: InvoicingHistoryProps) => {
  const { t, i18n } = useTranslation();

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
          <StatusLabel type={ORDER_STATUS[invoice.status].type} label={t(ORDER_STATUS[invoice.status].label)} />
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
              <div className={styles.gridHeader}>{t('customerView.invoicingHistory.type')}</div>
              <div className={styles.gridHeader}>{t('customerView.invoicingHistory.season')}</div>
              <div className={styles.gridHeader}>{t('customerView.invoicingHistory.dueDate')}</div>
              <div className={styles.gridHeader}>{t('customerView.invoicingHistory.amount')}</div>
              <div className={styles.gridHeader}>{t('customerView.invoicingHistory.status')}</div>
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
