import React from 'react';
import * as Yup from 'yup';
import { TextInput } from 'hds-react';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import Grid from '../../../../common/grid/Grid';
import Select from '../../../../common/select/Select';
import FormTypeTitle from '../../editModal/FormTypeTitle';
import {
  PeriodType,
  AdditionalProductTaxEnum,
  ProductServiceType,
  PriceUnits,
} from '../../../../@types/__generated__/globalTypes';
import {
  getPeriodTKey,
  getProductTax,
  getProductServiceTKey,
  getPriceUnits,
} from '../../../../common/utils/translations';
import Button from '../../../../common/button/Button';
import styles from './additionalServicesForm.module.scss';

const serviceOptions = Object.values(ProductServiceType);
const taxOptions = Object.values(AdditionalProductTaxEnum);
const priceUnitOptions = Object.values(PriceUnits);
const periodOptions = Object.values(PeriodType);

export interface AdditionalServiceValues {
  service: ProductServiceType | null;
  priceValue: number | string;
  priceUnit: PriceUnits | null;
  taxPercentage: AdditionalProductTaxEnum | null;
  period?: PeriodType | null;
}

export interface AdditionalServicesFormProps {
  initialValues?: AdditionalServiceValues | null;
  onSubmit(values: AdditionalServiceValues): void;
  onCancel(): void;
}

export const getAdditionalServicesValidationSchema = (t: TFunction) => {
  return Yup.object().shape({
    service: Yup.string().oneOf(serviceOptions).required(t('forms.common.errors.required')),
    priceValue: Yup.number()
      .positive()
      .typeError(t('forms.common.errors.numberType'))
      .required(t('forms.common.errors.required')),
    priceUnit: Yup.string().oneOf(priceUnitOptions).required(t('forms.common.errors.required')),
    taxPercentage: Yup.string()
      .oneOf(taxOptions)
      .typeError(t('forms.common.errors.numberType'))
      .required(t('forms.common.errors.required')),
    period: Yup.string().oneOf(periodOptions).required(t('forms.common.errors.required')),
  });
};

const OPTIONAL_SERVICES = [
  ProductServiceType.SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT,
  ProductServiceType.SUMMER_STORAGE_FOR_TRAILERS,
  ProductServiceType.PARKING_PERMIT,
  ProductServiceType.DINGHY_PLACE,
];

const AdditionalServicesForm = ({ initialValues, onSubmit, onCancel }: AdditionalServicesFormProps) => {
  const { t, i18n } = useTranslation();
  const defaultValues: AdditionalServiceValues = {
    service: null,
    priceValue: '',
    priceUnit: null,
    taxPercentage: null,
    period: null,
  };

  return (
    <Formik
      initialValues={initialValues ?? defaultValues}
      onSubmit={onSubmit}
      validationSchema={getAdditionalServicesValidationSchema(t)}
    >
      {({ isSubmitting, errors, isValid, dirty }) => {
        const isSubmitDisabled = !dirty || isSubmitting || !isValid;

        return (
          <Form className={styles.form}>
            <div className={styles.row}>
              <FormTypeTitle label={t('common.terminology.dataEntry')} value={t('pricing.additionalServices.title')} />
            </div>
            <hr />
            <Grid colsCount={1} className={styles.row}>
              <Field
                required={true}
                as={Select}
                id="service"
                name="service"
                label={t('pricing.additionalServices.service')}
                disabled={initialValues?.service}
                options={serviceOptions
                  .filter((option) => OPTIONAL_SERVICES.includes(option))
                  .map((option) => ({
                    value: option,
                    label: t(getProductServiceTKey(option)),
                  }))}
              />
            </Grid>
            <Grid colsCount={3} className={styles.row}>
              <Field
                required={true}
                as={TextInput}
                id="priceValue"
                name="priceValue"
                label={t('pricing.additionalServices.price')}
                invalid={!!errors.priceValue}
                helperText={errors.priceValue}
              />
              <Field
                required={true}
                as={Select}
                id="priceUnit"
                name="priceUnit"
                label={t('pricing.additionalServices.unit')}
                options={priceUnitOptions.map((option) => ({
                  value: option,
                  label: getPriceUnits(option),
                }))}
              />
              <Field
                required={true}
                as={Select}
                id="taxPercentage"
                name="taxPercentage"
                label={t('pricing.additionalServices.tax')}
                options={taxOptions.map((option) => ({
                  value: option,
                  label: getProductTax(option, i18n.language),
                }))}
              />
            </Grid>
            <Grid colsCount={3} className={styles.row}>
              <Field
                required={true}
                as={Select}
                id="period"
                name="period"
                label={t('pricing.additionalServices.period')}
                options={periodOptions.map((option) => ({
                  value: option,
                  label: t(getPeriodTKey(option)),
                }))}
              />
            </Grid>
            <div className={styles.buttonRow}>
              <Button variant="secondary" id="cancel" onClick={onCancel}>
                {t('common.cancel')}
              </Button>
              <Button type="submit" disabled={isSubmitDisabled}>
                {t('common.save')}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdditionalServicesForm;
