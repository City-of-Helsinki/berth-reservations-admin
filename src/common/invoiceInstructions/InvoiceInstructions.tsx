import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../features/invoiceCard/sendInvoiceForm/sendInvoiceForm.module.scss';

interface Props {
  email?: string | null;
  isResend?: boolean;
}

export const InvoiceInstructions = ({ email, isResend }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <p className={styles.instructions}>
        {t(isResend ? 'invoiceInstructions.resendParagraph1' : 'invoiceInstructions.paragraph1', {
          email: email,
        })}
      </p>
      <p className={styles.instructions}>
        {t(isResend ? 'invoiceInstructions.resendParagraph2' : 'invoiceInstructions.paragraph2')}
      </p>
    </>
  );
};
