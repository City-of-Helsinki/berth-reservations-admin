export const actionHistoryFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};

export const contactInformationFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};

export const maintenanceFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};

export const harborMooringFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};

export const berthInvoicingFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};

export const queueFeatureFlag = () => {
  return process.env.NODE_ENV !== 'production';
};
