import { PureQueryOptions } from 'apollo-client';

export type WinterStorageAreaForm = {
  imageFile: string | null;
  municipality: string | null;
  name: string;
  streetAddress: string | null;
  wwwUrl: string;
  zipCode: string;
};

export type Section = {
  identifier?: string;
  electricity?: boolean;
  gate?: boolean;
  water?: boolean;
  summerStorageForBoats?: boolean;
  summerStorageForDockingEquipment?: boolean;
  summerStorageForTrailers?: boolean;
};

export type Place = {
  number?: string;
  isActive?: boolean;
  width?: number;
  length?: number;
  winterStorageSection?: string;
  winterStorageSectionId?: string;
  comment?: string;
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
