import React from 'react';

import { BerthMooringType, OfferStatus } from '../../../@types/__generated__/globalTypes';
import { IconProps } from '../../../common/icons';

export type PlaceProperty = {
  prop: boolean | null;
  key: string;
  icon: (props: IconProps) => React.ReactElement | null;
};

export interface BerthSwitchOfferDetails {
  id: string;
  status: OfferStatus;
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
  lighting: boolean;
  pierIdentifier: string;
  wasteCollection: boolean;
  water: boolean;
}
