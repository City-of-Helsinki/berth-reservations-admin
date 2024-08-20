import React, { useState } from 'react';
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
import FormHeader from '../../../../common/formHeader/FormHeader';
import ConfirmationModal from '../../../../common/confirmationModal/ConfirmationModal';

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
  editingServiceId?: string;
  onSubmit(values: AdditionalServiceValues): void;
  onCancel(): void;
  onDelete(): void;
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
  ProductServiceType.STORAGE_ON_ICE,
];

const AdditionalServicesForm = ({
  editingServiceId,
  initialValues,
  onSubmit,
  onCancel,
  onDelete,
}: AdditionalServicesFormProps) => {
  const { t, i18n } = useTranslation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
            <FormHeader
              title={t('pricing.editModalHeading')}
              isSubmitting={isSubmitting}
              onDelete={editingServiceId ? () => setIsDeleteModalOpen(true) : undefined}
              onDeleteText={t('forms.common.delete')}
            />
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
                visibleOptions={4}
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
                disabled={initialValues?.period}
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

            <ConfirmationModal
              isOpen={isDeleteModalOpen}
              title={t('forms.additionalServices.title')}
              infoText={t('forms.additionalServices.deleteConfirmation.infoText')}
              onCancelText={t('forms.common.cancel')}
              onConfirmText={t('forms.common.delete')}
              warningText={t('forms.additionalServices.deleteConfirmation.warningText')}
              onCancel={() => setIsDeleteModalOpen(false)}
              onConfirm={onDelete}
              className={styles.confirmationModal}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdditionalServicesForm;
