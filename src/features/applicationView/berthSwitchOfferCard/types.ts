import React from 'react';

import { BerthMooringType, OfferStatus } from '../../../@types/__generated__/globalTypes';
import { IconProps } from '../../../common/icons';

export type PlaceProperty = {
  prop: boolean | null;
  key: string;
  icon: (props: IconProps) => React.ReactElement | null;
};

export interface BerthSwitchOfferDetails {
  berthComment: string;
  berthDepth: number | null;
  berthIsAccessible: boolean;
  berthLength: number | null;
  berthMooringType: BerthMooringType | null;
  berthNum: number | string;
  berthWidth: number | null;
  electricity: boolean;
  gate: boolean;
  harborName: string;
  id: string;
  lighting: boolean;
  offerNumber: string;
  pierIdentifier: string;
  status: OfferStatus;
  wasteCollection: boolean;
  water: boolean;
}
