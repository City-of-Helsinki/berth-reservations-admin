import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'hds-react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';

import styles from './additionalInvoice.module.scss';
import FormHeader from '../../common/formHeader/FormHeader';
import Button from '../../common/button/Button';
import { getDefaultDueDate, getDueDateValidation } from '../../common/utils/dates';
import { CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order as CreateAddtionalInvoiceOrder } from './__generated__/CREATE_ADDITIONAL_INVOICE';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import { InvoiceInstructions } from '../../common/invoiceInstructions/InvoiceInstructions';
import { LeaseInformation } from './LeaseInformation';
import { formatPrice } from '../../common/utils/format';
import { getAdditionalProductService, getBerthLease } from './utils';
import { getProductServiceTKey } from '../../common/utils/translations';
import { ProductServiceType } from '../../@types/__generated__/globalTypes';

type FormValues = {
  dueDate: string;
};

export type SendAdditionalInvoiceFormProps = {
  onCancel: () => void;
  onSubmit: (data: FormValues) => void;
  order: CreateAddtionalInvoiceOrder | null | undefined;
  email: string | null | undefined;
};

const SendAdditionalInvoiceForm = ({
  onSubmit,
  onCancel,
  order,
  email,
}: SendAdditionalInvoiceFormProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object<FormValues>().shape({
        dueDate: getDueDateValidation(t),
      }),
    [t]
  );

  const initial: FormValues = {
    dueDate: getDefaultDueDate(),
  };

  const additionalProductService = getAdditionalProductService(order);
  const additionalProductNameKey = getProductServiceTKey(additionalProductService as ProductServiceType);
  const berthLease = getBerthLease(order);

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
          <FormHeader title={t('additionalInvoice.sendTitle').toUpperCase()} />

          {berthLease && <LeaseInformation berthLease={berthLease} />}

          <hr className={classNames(styles.divider, styles.invoiceTopDivider)} />

          <LabelValuePair label={t('additionalInvoice.invoiceProduct')} value={t(additionalProductNameKey)} />

          <hr className={classNames(styles.divider, styles.invoiceBottomDivider)} />

          <LabelValuePair
            label={`${t(additionalProductNameKey)} ${t('common.total').toLocaleLowerCase()}`}
            value={formatPrice(order?.totalPrice, language)}
          />

          <hr className={styles.divider} />

          <LabelValuePair
            className={styles.totalPrice}
            label={t('common.total').toUpperCase()}
            value={formatPrice(order?.totalPrice, language)}
          />

          <InvoiceInstructions email={email as string} />

          <div className={styles.dueDate}>
            <TextInput
              id="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              label={t('additionalInvoice.dueDate')}
              invalid={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </div>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit">{t('forms.common.send')}</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SendAdditionalInvoiceForm;
