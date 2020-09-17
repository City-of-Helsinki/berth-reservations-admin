import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { TextArea, TextInput } from 'hds-react';

import { CustomerFormValues, FormProps } from './types';
import { CustomerGroup } from '../../@types/__generated__/globalTypes';
import Grid from '../../common/grid/Grid';
import Select from '../../common/select/Select';
import styles from './customerForm.module.scss';
import Button from '../../common/button/Button';
import { getCustomerGroupKey } from '../../common/utils/translations';
import Text from '../../common/text/Text';

export type CustomerFormProps = FormProps<CustomerFormValues>;

const getValidationSchema = (t: TFunction) => {
  Yup.object<CustomerFormValues>().shape({});
};

const CustomerForm = ({ initialValues, isSubmitting, onSubmit, onCancel }: CustomerFormProps) => {
  const { t } = useTranslation();
  const validationSchema = getValidationSchema(t);

  const initial: CustomerFormValues = initialValues ?? {
    address: '',
    businessId: '',
    city: '',
    comment: '',
    customerGroup: CustomerGroup.PRIVATE,
    email: '',
    firstName: '',
    lastName: '',
    organizationName: '',
    phone: '',
    postalCode: '',
    ssn: '',
  };

  const customerGroupOptions = Object.keys(CustomerGroup).map((group) => ({
    label: t(getCustomerGroupKey(group as CustomerGroup)),
    value: group,
  }));

  return (
    <>
      <Text as="h4" color="brand">
        {t('forms.customer.title').toUpperCase()}
      </Text>
      <Formik initialValues={initial} onSubmit={(values) => onSubmit?.(values)} validationSchema={validationSchema}>
        {({ errors, handleChange, values }) => (
          <Form className={styles.form}>
            <Select
              id="customerGroup"
              value={values.customerGroup as string}
              options={customerGroupOptions}
              onChange={handleChange}
              label={t('forms.customer.customerGroup')}
              required
            />
            <TextInput
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              label={t('forms.customer.firstName')}
              invalid={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextInput
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              label={t('forms.customer.lastName')}
              invalid={!!errors.lastName}
              helperText={errors.lastName}
            />
            <TextInput
              id="ssn"
              value={values.ssn}
              onChange={handleChange}
              label={t('forms.customer.ssn')}
              invalid={!!errors.ssn}
              helperText={errors.ssn}
              disabled // TODO
            />

            <hr className={styles.divider} />

            <TextInput
              id="organizationName"
              value={values.organizationName}
              onChange={handleChange}
              label={t('forms.customer.organizationName')}
              invalid={!!errors.organizationName}
              helperText={errors.organizationName}
              disabled={values.customerGroup === CustomerGroup.PRIVATE}
              required={values.customerGroup !== CustomerGroup.PRIVATE}
            />
            <TextInput
              id="businessId"
              value={values.businessId}
              onChange={handleChange}
              label={t('forms.customer.businessId')}
              invalid={!!errors.businessId}
              helperText={errors.businessId}
              disabled={values.customerGroup === CustomerGroup.PRIVATE}
              required={values.customerGroup !== CustomerGroup.PRIVATE}
            />

            <hr className={styles.divider} />

            <TextInput
              id="address"
              label={t('forms.customer.address')}
              value={values.address}
              onChange={handleChange}
              invalid={!!errors.address}
              helperText={errors.address}
            />
            <Grid colsCount={2} className={styles.grid}>
              <TextInput
                id="postalCode"
                label={t('forms.customer.postalCode')}
                value={values.postalCode}
                onChange={handleChange}
                invalid={!!errors.postalCode}
                helperText={errors.postalCode}
              />
              <TextInput
                id="city"
                label={t('forms.customer.city')}
                value={values.city}
                onChange={handleChange}
                invalid={!!errors.city}
                helperText={errors.city}
              />
            </Grid>

            <hr className={styles.divider} />

            <TextInput
              id="phone"
              label={t('forms.customer.phone')}
              value={values.phone || ''}
              onChange={handleChange}
              invalid={!!errors.phone}
              helperText={errors.phone}
            />
            <TextInput
              id="email"
              label={t('forms.customer.email')}
              value={values.email || ''}
              onChange={handleChange}
              invalid={!!errors.email}
              helperText={errors.email}
            />
            <TextArea
              id="comment"
              label={t('forms.customer.comment')}
              value={values.comment || ''}
              onChange={handleChange}
              invalid={!!errors.comment}
              helperText={errors.comment}
            />

            <div className={styles.formActionButtons}>
              <Button variant="secondary" disabled={isSubmitting} color={'supplementary'} onClick={onCancel}>
                {t('forms.common.cancel')}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {t('common.save')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CustomerForm;
