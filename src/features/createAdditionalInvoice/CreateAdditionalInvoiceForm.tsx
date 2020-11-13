import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import Section from '../../common/section/Section';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import Button from '../../common/button/Button';
import { BerthLease } from '../customerView/types';
import { formatDate } from '../../common/utils/format';
import styles from './additionalInvoice.module.scss';
import { AdditionalService } from '../pricing/additionalServicePricing/AdditionalServicePricing';
import Select from '../../common/select/Select';
import { getProductServiceTKey } from '../../common/utils/translations';
import FormHeader from '../../common/formHeader/FormHeader';

interface CreateAdditionalInvoiceProps {
  berthLease?: BerthLease;
  additionalProducts: AdditionalService[];
  onSubmit: (data: AdditionalInvoiceFormValues) => void;
  onCancel: () => void;
}

export interface AdditionalInvoiceFormValues {
  additionalProductId?: string;
}

const CreateAdditionalInvoiceForm = ({
  berthLease,
  additionalProducts,
  onSubmit,
  onCancel,
}: CreateAdditionalInvoiceProps) => {
  const { t, i18n } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object<AdditionalInvoiceFormValues>().shape({
        additionalProductId: Yup.string().required(t('forms.common.errors.required')),
      }),
    [t]
  );

  const initial: AdditionalInvoiceFormValues = {
    additionalProductId: additionalProducts[0].id,
  };

  const isSubmitting = false;

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit(values)}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, handleChange }) => (
        <Form className={styles.form}>
          <FormHeader title={t('additionalInvoice.createTitle').toUpperCase()} />

          {berthLease && (
            <Section>
              <LabelValuePair label={t('additionalInvoice.contract')} value={t('additionalInvoice.berthPlace')} />
              <LabelValuePair label={t('additionalInvoice.berthPlace')} value={berthLease.harbor?.name} />
              <LabelValuePair
                label={t('additionalInvoice.contractPeriod')}
                value={`${formatDate(berthLease.startDate, i18n.language)} - ${formatDate(
                  berthLease.endDate,
                  i18n.language
                )}`}
              />
            </Section>
          )}

          <hr className={styles.divider} />

          <Section>
            <Select
              id="additionalProductId"
              value={values.additionalProductId}
              options={additionalProducts.map((additionalProduct) => {
                return {
                  label: t(getProductServiceTKey(additionalProduct.service)) + ' ' + additionalProduct.period,
                  value: additionalProduct.id,
                };
              })}
              onChange={handleChange}
              label={t('additionalInvoice.addtionalService')}
              required
              disabled={!berthLease}
            />
          </Section>

          <div className={styles.formActionButtons}>
            <Button variant="secondary" disabled={isSubmitting} onClick={onCancel}>
              {t('forms.common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {t('additionalInvoice.createInvoice')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAdditionalInvoiceForm;
