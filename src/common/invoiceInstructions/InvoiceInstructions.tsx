import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../../features/invoiceCard/sendInvoiceForm/sendInvoiceForm.module.scss';

interface Props {
  email: string | null;
}

export const InvoiceInstructions = ({ email }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <p className={styles.instructions}>
        {t('invoiceInstructions.paragraph1', {
          email: email,
        })}
      </p>
      <p className={styles.instructions}>{t('invoiceInstructions.paragraph2')}</p>
    </>
  );
};
