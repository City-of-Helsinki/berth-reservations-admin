import gql from 'graphql-tag';

export const SEND_EXISTING_BERTH_INVOICES_MUTATION = gql`
  mutation SEND_EXISTING_BERTH_INVOICES($input: SendExistingBerthInvoicesMutationInput!) {
    sendExistingBerthInvoices(input: $input) {
      ok
    }
  }
`;

export const SEND_EXISTING_WINTER_STORAGE_INVOICES_MUTATION = gql`
  mutation SEND_EXISTING_WINTER_STORAGE_INVOICES($input: SendExistingWinterStorageInvoicesMutationInput!) {
    sendExistingWinterStorageInvoices(input: $input) {
      ok
    }
  }
`;
