import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';
import { TFunction } from 'i18next';

import styles from './sendInvoiceForm.module.scss';
import FormHeader from '../../../../common/formHeader/FormHeader';
import Button from '../../../../common/button/Button';
import Text from '../../../../common/text/Text';

type FormValues = {
  dueDate: string;
};

export type SendInvoiceFormProps = {
  email: string | null;
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
};

const getValidationSchema = (t: TFunction) =>
  Yup.object<FormValues>().shape({
    dueDate: Yup.date().required(t('forms.common.errors.required')),
  });

const SendInvoiceForm = ({ email, onSubmit, onCancel, isSubmitting }: SendInvoiceFormProps) => {
  const { t } = useTranslation();

  const validationSchema = getValidationSchema(t);

  const mapDateToDateInputValue = (date: Date): string => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getDate()}`;
  };

  const initial: FormValues = {
    dueDate: mapDateToDateInputValue(new Date(Date.now())),
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
          <FormHeader title={t('forms.sendInvoice.title').toUpperCase()} />

          <p className={styles.instructions}>
            {t('forms.sendInvoice.instructions.paragraph1', {
              email: email,
            })}
          </p>
          <p className={styles.instructions}>{t('forms.sendInvoice.instructions.paragraph2')}</p>

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('forms.sendInvoice.dueDate')}
              invalid={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </div>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={!email || isSubmitting}>
              {t('forms.common.send')}
            </Button>
          </div>
          {!email && (
            <Text color="critical" className={styles.missingEmail}>
              {t('forms.sendInvoice.missingEmail')}
            </Text>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SendInvoiceForm;