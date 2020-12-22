import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import Section from '../../../common/section/Section';
import styles from './openInvoicesCard.module.scss';
import { isBerthInvoice, isWinterStorageInvoice } from '../utils';
import { getInvoiceTypeKey, getProductServiceTKey } from '../../../common/utils/translations';
import { formatDate, formatPrice } from '../../../common/utils/format';
import Button from '../../../common/button/Button';
import { Invoice } from '../types';
import { PriceUnits, OrderStatus } from '../../../@types/__generated__/globalTypes';
import BerthContractDetails from '../../contractDetails/BerthContractDetailsContainer';
import WinterStorageContractDetails from '../../contractDetails/WinterStorageContractDetailsContainer';

export interface OpenInvoicesCardProps {
  invoices: Invoice[];
  handleShowInvoice(invoice: Invoice): void;
}

const OpenInvoicesCard = ({ invoices, handleShowInvoice }: OpenInvoicesCardProps) => {
  const { t, i18n } = useTranslation();

  const renderInvoice = (invoice: Invoice, id: number) => {
    const { contractPeriod } = invoice;

    return (
      <CardBody key={id}>
        <Section title={t(getInvoiceTypeKey(invoice)).toUpperCase()}>
          {isBerthInvoice(invoice) && (
            <LabelValuePair
              label={t('common.terminology.berth')}
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
              label={t('common.terminology.winterStorageArea')}
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
          {invoice.status === OrderStatus.PAID && (
            <LabelValuePair
              label={t('customerView.customerInvoice.paidAt')}
              value={formatDate(invoice.paidAt, i18n.language)}
            />
          )}
        </Section>
        <Section className={styles.feesSection}>
          <LabelValuePair
            align="right"
            label={t('common.terminology.basePrice')}
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
            label={t('common.total').toUpperCase()}
            value={formatPrice(invoice.totalPrice, i18n.language)}
          />
        </Section>
        {isBerthInvoice(invoice) && <BerthContractDetails leaseId={invoice.leaseId} />}
        {isWinterStorageInvoice(invoice) && <WinterStorageContractDetails leaseId={invoice.leaseId} />}
        <Button variant="secondary" theme="coat" onClick={() => handleShowInvoice(invoice)} className={styles.button}>
          {t('customerView.customerInvoice.showInvoice')}
        </Button>
      </CardBody>
    );
  };

  return (
    <Card>
      <CardHeader title={t('common.terminology.openInvoices').toUpperCase()} />
      {invoices.length > 0 ? (
        invoices.map((invoice, id) => renderInvoice(invoice, id))
      ) : (
        <CardBody>{t('customerView.customerInvoice.noInvoice')}</CardBody>
      )}
    </Card>
  );
};

export default OpenInvoicesCard;
