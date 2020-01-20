import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'hds-react';

import Card from '../../../common/card/Card';
import Text from '../../../common/text/Text';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import Paragraph from '../../../common/paragraph/Paragraph';
import styles from './billsCard.module.scss';

export interface ComponentProps {
  berthPlace: string;
  contractPeriod: string;
  dueDate: string;
  basicFee: number;
  mooringFee: [number, string];
  electricityFee: [number, string];
  waterFee: [number, string];
  wasteFee: [number, string];
  gateFee: number;
  lightingFee: number;
  total: number;
  handleShowBill(event: React.MouseEvent<HTMLButtonElement>): void;
}

const BillsCard: React.SFC<ComponentProps> = ({
  basicFee,
  berthPlace,
  contractPeriod,
  dueDate,
  electricityFee,
  gateFee,
  lightingFee,
  mooringFee,
  handleShowBill,
  waterFee,
  wasteFee,
  total,
}) => {
  const { t, i18n } = useTranslation();

  const formatPrice = (fee: number, percentage?: string) => {
    const formatter = new Intl.NumberFormat(i18n.language || 'fi-FI', {
      style: 'currency',
      currency: 'EUR',
      minimumIntegerDigits: 2,
    });

    return `${percentage}\u00A0\u00A0${formatter.format(fee)}`;
  };

  return (
    <Card title={t('individualCustomer.customerBill.title')}>
      <Button
        color="supplementary"
        onClick={handleShowBill}
        className={styles.button}
      >
        {t('individualCustomer.customerBill.showInvoice')}
      </Button>
      <Text as="h3">{t('individualCustomer.customerBill.berthRental')}</Text>
      <Paragraph>
        <LabelValuePair
          label={t('individualCustomer.customerBill.berthPlace')}
          value={berthPlace}
        />
        <LabelValuePair
          label={t('individualCustomer.customerBill.contractPeriod')}
          value={contractPeriod}
        />
        <LabelValuePair
          label={t('individualCustomer.customerBill.dueDate')}
          value={dueDate}
        />
      </Paragraph>
      <Paragraph className={styles.feesSection}>
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.basicFee')}
          value={formatPrice(basicFee)}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.mooring')}
          value={formatPrice(mooringFee[0], mooringFee[1])}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.electricity')}
          value={formatPrice(electricityFee[0], electricityFee[1])}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.water')}
          value={formatPrice(waterFee[0], waterFee[1])}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.waste')}
          value={formatPrice(wasteFee[0], wasteFee[1])}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.gate')}
          value={formatPrice(gateFee)}
        />
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.lighting')}
          value={formatPrice(lightingFee)}
        />
      </Paragraph>
      <Paragraph className={styles.feesSection}>
        <LabelValuePair
          align="right"
          label={t('individualCustomer.customerBill.total')}
          value={formatPrice(total)}
        />
      </Paragraph>
    </Card>
  );
};

export default BillsCard;
