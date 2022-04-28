import { PureQueryOptions } from 'apollo-client';

export type WinterStorageAreaForm = {
  imageFile: string | null;
  municipality: string | null;
  name: string;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
};

export interface FormProps<T> {
  initialValues?: T;
  // Queries to refetch when mutations are run
  refetchQueries?: PureQueryOptions[];
  isSubmitting?: boolean;

  onCancel?(): void;
  onDelete?(deleted: T): void;
  onSubmit?(updated: T): void;
}
