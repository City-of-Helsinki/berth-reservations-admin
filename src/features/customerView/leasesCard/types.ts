import React from 'react';

import { BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';

export type Lease = {
  address: string;
  depth?: number | null;
  endDate: string;
  id: string;
  length?: number;
  link?: string;
  mooringType?: BerthMooringType;
  startDate: string;
  status: LeaseStatus;
  type: 'berth' | 'winterStorage';
  width?: number;
  renderContractDetails(): React.ReactNode;
};
