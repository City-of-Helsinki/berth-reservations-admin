import { PureQueryOptions } from 'apollo-client';

import { CustomerGroup } from '../../@types/__generated__/globalTypes';

export interface FormProps<T> {
  initialValues?: T;
  // Queries to refetch when mutations are run
  refetchQueries?: PureQueryOptions[];
  isSubmitting?: boolean;

  onCancel?(): void;
  onDelete?(deleted: T): void;
  onSubmit?(updated: T): void;
}

export type Customer = {
  address: string;
  city: string;
  comment?: string | null;
  customerGroup: CustomerGroup | null;
  email?: string;
  firstName: string;
  id?: string;
  lastName: string;
  organizationName?: string;
  businessId?: string;
  phone?: string | null;
  postalCode: string;
  ssn?: string;
};
