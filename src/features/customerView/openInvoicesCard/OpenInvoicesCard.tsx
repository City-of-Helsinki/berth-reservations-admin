import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import Section from '../../../common/section/Section';
import styles from './openInvoicesCard.module.scss';
import { isBerthInvoice, isWinterStorageInvoice } from '../utils';
import { getProductServiceTKey } from '../../../common/utils/translations';
import { formatDate, formatPrice } from '../../../common/utils/format';
import Button from '../../../common/button/Button';
import { Invoice } from '../types';
import { PriceUnits } from '../../../@types/__generated__/globalTypes';

export interface OpenInvoicesCardProps {
  invoices: Invoice[];
  handleShowInvoice(invoice: Invoice): void;
}

const OpenInvoicesCard = ({ invoices, handleShowInvoice }: OpenInvoicesCardProps) => {
  const { t, i18n } = useTranslation();

  const renderInvoice = (invoice: Invoice, id: number) => {
    const { contractPeriod } = invoice;

    return (
      <div key={id}>
        <Section
          title={
            isBerthInvoice(invoice)
              ? t('customerView.customerInvoice.berthRental')
              : t('customerView.customerInvoice.winterStorageRental')
          }
        >
          {isBerthInvoice(invoice) && (
            <LabelValuePair
              label={t('customerView.customerInvoice.berthPlace')}
              value={
                invoice.berthInformation.harborName +
                ' ' +
                invoice.berthInformation.pierIdentifier +
                ' ' +
                invoice.berthInformation.number
              }
            />
          )}
          {isWinterStorageInvoice(invoice) && (
            <LabelValuePair
              label={t('customerView.customerInvoice.winterStorageArea')}
              value={invoice.winterStorageInformation.winterStorageAreaName}
            />
          )}
          <LabelValuePair
            label={t('customerView.customerInvoice.contractPeriod')}
            value={`${formatDate(contractPeriod.startDate, i18n.language)} - ${formatDate(
              contractPeriod.endDate,
              i18n.language
            )}`}
          />
          <LabelValuePair
            label={t('customerView.customerInvoice.dueDate')}
            value={formatDate(invoice.dueDate, i18n.language)}
          />
        </Section>
        <Section className={styles.feesSection}>
          <LabelValuePair
            align="right"
            label={t('customerView.customerInvoice.basicFee')}
            value={formatPrice(invoice.basePrice, i18n.language)}
          />
          {invoice.orderLines.map((orderLine, id) => (
            <LabelValuePair
              align="right"
              label={t(getProductServiceTKey(orderLine.product))}
              value={
                orderLine.priceUnit === PriceUnits.PERCENTAGE
                  ? formatPrice(orderLine.price, i18n.language, orderLine.priceValue)
                  : formatPrice(orderLine.price, i18n.language)
              }
              key={id}
            />
          ))}
        </Section>
        <Section className={styles.feesSection}>
          <LabelValuePair
            align="right"
            label={t('customerView.customerInvoice.total')}
            value={formatPrice(invoice.totalPrice, i18n.language)}
          />
        </Section>
        <Button variant="secondary" theme="coat" onClick={() => handleShowInvoice(invoice)} className={styles.button}>
          {t('customerView.customerInvoice.showInvoice')}
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader title={t('customerView.customerInvoice.title')} />
      <CardBody>
        {invoices.length > 0
          ? invoices.map((invoice, id) => renderInvoice(invoice, id))
          : t('customerView.customerInvoice.noInvoice')}
      </CardBody>
    </Card>
  );
};

export default OpenInvoicesCard;
