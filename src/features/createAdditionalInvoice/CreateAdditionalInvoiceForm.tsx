import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import Section from '../../common/section/Section';
import Button from '../../common/button/Button';
import { BerthLease } from '../customerView/types';
import styles from './additionalInvoice.module.scss';
import { AdditionalService } from '../pricing/additionalServicePricing/AdditionalServicePricing';
import Select from '../../common/select/Select';
import { getProductServiceTKey } from '../../common/utils/translations';
import FormHeader from '../../common/formHeader/FormHeader';
import { formatDate } from '../../common/utils/format';
import Text from '../../common/text/Text';

interface CreateAdditionalInvoiceProps {
  berthLeases: BerthLease[];
  additionalProducts: AdditionalService[];
  onSubmit: (data: AdditionalInvoiceFormValues) => void;
  onCancel: () => void;
  email: string | null | undefined;
}

export interface AdditionalInvoiceFormValues {
  additionalProductId?: string;
  leaseId?: string;
}

const CreateAdditionalInvoiceForm = ({
  berthLeases,
  additionalProducts,
  onSubmit,
  onCancel,
  email,
}: CreateAdditionalInvoiceProps) => {
  const { t, i18n } = useTranslation();

  const hasPaidBerthLeases = berthLeases.length > 0;
  const submitDisabled = !hasPaidBerthLeases || !email;

  const validationSchema = useMemo(
    () =>
      Yup.object<AdditionalInvoiceFormValues>().shape({
        additionalProductId: Yup.string().required(t('forms.common.errors.required')),
        leaseId: Yup.string().required(t('forms.common.errors.required')),
      }),
    [t]
  );

  const initial: AdditionalInvoiceFormValues = {
    additionalProductId: additionalProducts[0]?.id,
    leaseId: berthLeases[0]?.id,
  };

  const toLeaseOption = (berthLease: BerthLease) => {
    const berthName = berthLease.harbor?.name?.substring(0, 30);
    return {
      label: `${berthName} ${formatDate(berthLease.startDate, i18n.language)} - ${formatDate(
        berthLease.endDate,
        i18n.language
      )}`,
      value: berthLease.id,
    };
  };

  const toAdditionalProductOption = (additionalProduct: AdditionalService) => {
    return {
      label: t(getProductServiceTKey(additionalProduct.service)),
      value: additionalProduct.id,
    };
  };

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => onSubmit(values)}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, handleChange }) => {
        return (
          <Form className={styles.form}>
            <FormHeader title={t('additionalInvoice.createTitle').toUpperCase()} />

            <Section>
              <Select
                id="leaseId"
                value={values.leaseId}
                options={berthLeases.map(toLeaseOption)}
                onChange={handleChange}
                label={t('additionalInvoice.berthContract')}
                required
              />
            </Section>

            <hr className={styles.divider} />

            <Section>
              <Select
                id="additionalProductId"
                value={values.additionalProductId}
                options={additionalProducts.map(toAdditionalProductOption)}
                onChange={handleChange}
                label={t('additionalInvoice.addtionalService')}
                required
              />
            </Section>

            {!email && (
              <div>
                <Text weight="normalWeight" as="strong" color="critical">
                  {t('additionalInvoice.noEmail')}
                </Text>
              </div>
            )}
            {!hasPaidBerthLeases && (
              <div>
                <Text weight="normalWeight" as="strong" color="critical">
                  {t('additionalInvoice.noContract')}
                </Text>
              </div>
            )}

            <div className={styles.formActionButtons}>
              <Button variant="secondary" onClick={onCancel}>
                {t('forms.common.cancel')}
              </Button>
              <Button type="submit" disabled={submitDisabled}>
                {t('additionalInvoice.createInvoice')}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateAdditionalInvoiceForm;
