import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FormikErrors, FormikValues } from 'formik';
import { TextInput } from 'hds-react';
import styles from './customerForm.module.scss';
import Grid from '../../common/grid/Grid';
import Text from '../../common/text/Text';

export interface OrganizationCustomerFieldsProps {
  values: FormikValues;
  handleChange: (e: ChangeEvent<unknown>) => void;
  errors: FormikErrors<FormikValues>;
}

const OrganizationCustomerFields = ({ values, handleChange, errors }: OrganizationCustomerFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <TextInput
        id="organizationName"
        value={values.organizationName}
        onChange={handleChange}
        label={t('forms.customer.organizationName')}
        invalid={!!errors.organizationName}
        helperText={errors.organizationName as string}
        required
      />
      <TextInput
        id="businessId"
        value={values.businessId}
        onChange={handleChange}
        label={t('forms.customer.businessId')}
        invalid={!!errors.businessId}
        helperText={errors.businessId as string}
        required
      />

      <hr className={styles.divider} />

      <TextInput
        id="address"
        label={t('forms.customer.address')}
        value={values.address}
        onChange={handleChange}
        invalid={!!errors.address}
        helperText={errors.address as string}
        required
      />
      <Grid colsCount={2} className={styles.grid}>
        <TextInput
          id="postalCode"
          label={t('forms.customer.postalCode')}
          value={values.postalCode}
          onChange={handleChange}
          invalid={!!errors.postalCode}
          helperText={errors.postalCode as string}
          required
        />
        <TextInput
          id="city"
          label={t('forms.customer.city')}
          value={values.city}
          onChange={handleChange}
          invalid={!!errors.city}
          helperText={errors.city as string}
          required
        />
      </Grid>

      <hr className={styles.divider} />

      <Text size="m" weight="bold">
        Yhteyshenkilö
      </Text>

      <TextInput
        id="firstName"
        value={values.firstName}
        onChange={handleChange}
        label={t('forms.customer.firstName')}
        invalid={!!errors.firstName}
        helperText={errors.firstName as string}
        required
      />
      <TextInput
        id="lastName"
        value={values.lastName}
        onChange={handleChange}
        label={t('forms.customer.lastName')}
        invalid={!!errors.lastName}
        helperText={errors.lastName as string}
        required
      />
    </>
  );
};

export default OrganizationCustomerFields;
