import { PureQueryOptions } from 'apollo-client';

import { CustomerGroup, InvoicingType } from '../../@types/__generated__/globalTypes';

export interface FormProps<T> {
  initialValues?: T;
  // Queries to refetch when mutations are run
  refetchQueries?: PureQueryOptions[];
  isSubmitting?: boolean;

  onCancel?(): void;
  onDelete?(deleted: T): void;
  onSubmit?(updated: T): void;
}

export type CustomerFormIdentifiers = {
  id: string;
  primaryAddressId?: string;
  primaryPhoneId?: string;
  primaryEmailId?: string;
  initialCustomerGroup: CustomerGroup | null;
};

export type CustomerFormValues = {
  address: string;
  city: string;
  comment: string;
  customerGroup: CustomerGroup;
  email: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  businessId: string;
  phone: string;
  postalCode: string;
  invoicingType?: InvoicingType | null;
};
