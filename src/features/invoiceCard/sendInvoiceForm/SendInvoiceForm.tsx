import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';

import styles from './sendInvoiceForm.module.scss';
import FormHeader from '../../../common/formHeader/FormHeader';
import Button from '../../../common/button/Button';
// import Text from '../../../common/text/Text';
import { getDefaultDueDate, getDueDateValidation } from '../../../common/utils/dates';
// import { InvoiceInstructions } from '../../../common/invoiceInstructions/InvoiceInstructions';

type FormValues = {
  dueDate: string;
};

export type SendInvoiceFormProps = {
  // email: string | null;
  isSubmitting: boolean;
  isResend?: boolean;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
};

const SendInvoiceForm = ({
  // email,
  onSubmit,
  onCancel,
  isSubmitting,
  isResend,
}: SendInvoiceFormProps) => {
  const { t } = useTranslation();

  const validationSchema = useMemo(() => {
    return Yup.object<FormValues>().shape({
      dueDate: getDueDateValidation(t),
    });
  }, [t]);

  const initial: FormValues = {
    dueDate: getDefaultDueDate(),
  };

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit(values)}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange }) => (
        <Form className={styles.form}>
          <FormHeader
            title={t(isResend ? 'invoiceCard.sendInvoice.resendTitle' : 'invoiceCard.sendInvoice.title').toUpperCase()}
          />

          {/* TODO: re-enable this warning once agreed on the design for sending multiple offers */}
          {/* <InvoiceInstructions email={email} isResend={isResend} /> */}

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('invoiceCard.sendInvoice.dueDate')}
              invalid={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </div>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={
                // !email ||
                isSubmitting
              }
            >
              {t('forms.common.send')}
            </Button>
          </div>
          {/* {email === null && (
            <Text color="critical" className={styles.missingEmail}>
              {t('invoiceCard.sendInvoice.missingEmail')}
            </Text>
          )} */}
        </Form>
      )}
    </Formik>
  );
};

export default SendInvoiceForm;
