import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { TextArea, TextInput } from 'hds-react';

import { CustomerFormValues, FormProps } from './types';
import { CustomerGroup } from '../../@types/__generated__/globalTypes';
import Select from '../../common/select/Select';
import styles from './customerForm.module.scss';
import Button from '../../common/button/Button';
import { getCustomerGroupKey } from '../../common/utils/translations';
import Text from '../../common/text/Text';
import PrivateCustomerFields from './PrivateCustomerFields';
import OrganizationCustomerFields from './OrganizationCustomerFields';

export type CustomerFormProps = FormProps<CustomerFormValues>;

const getValidationSchema = (t: TFunction) => {
  return Yup.object<CustomerFormValues>().shape({
    address: Yup.string().required(t('forms.common.errors.required')),
    businessId: Yup.string().when('customerGroup', {
      is: (customerGroup) => customerGroup !== CustomerGroup.PRIVATE,
      then: (businessId: Yup.StringSchema) => businessId.required(t('forms.common.errors.required')),
    }),
    city: Yup.string().required(t('forms.common.errors.required')),
    customerGroup: Yup.string().oneOf(Object.values(CustomerGroup), t('forms.common.errors.required')),
    email: Yup.string().email(t('forms.common.errors.email')).required(t('forms.common.errors.required')),
    firstName: Yup.string().required(t('forms.common.errors.required')),
    lastName: Yup.string().required(t('forms.common.errors.required')),
    organizationName: Yup.string().when('customerGroup', {
      is: (customerGroup) => customerGroup !== CustomerGroup.PRIVATE,
      then: (organizationName: Yup.StringSchema) => organizationName.required(t('forms.common.errors.required')),
    }),
    postalCode: Yup.string().required(t('forms.common.errors.required')).length(5, t('forms.common.errors.postalCode')),
  });
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
      <Formik
        initialValues={initial}
        onSubmit={(values) => onSubmit?.(values)}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ errors, handleChange, values, validateForm }) => (
          <Form className={styles.form}>
            <Select
              id="customerGroup"
              value={values.customerGroup as string}
              options={customerGroupOptions}
              onChange={handleChange}
              label={t('forms.customer.customerGroup')}
              required
            />

            {values.customerGroup === CustomerGroup.PRIVATE ? (
              <PrivateCustomerFields values={values} handleChange={handleChange} errors={errors} />
            ) : (
              <OrganizationCustomerFields values={values} handleChange={handleChange} errors={errors} />
            )}

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
              required
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
              <Button type="submit" disabled={isSubmitting} onClick={() => validateForm(values)}>
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
