export type FailedInvoices = {
  id: string;
  customerId: string;
  customerName: string;
  failureReason: string;
};

export type FailedBerthInvoices = FailedInvoices & {
  harbor: string;
};
