import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import Section from '../../../common/section/Section';
import { formatPrice } from '../../../common/utils/format';
import { BerthPricing as BerthPricingData } from './__generated__/BerthPricing';
import { getBerthsData } from './utils';
import { PriceTier } from '../../../@types/__generated__/globalTypes';
import { getPriceTier } from '../../../common/utils/translations';

export interface BerthPrice {
  id: string;
  productId: string | undefined;
  name: string;
  [PriceTier.TIER_1]: number | undefined;
  [PriceTier.TIER_2]: number | undefined;
  [PriceTier.TIER_3]: number | undefined;
}

export interface BerthPricingProps {
  className?: string;
  data: BerthPricingData | undefined | null;
  loading: boolean;
  refetchQueries?: PureQueryOptions[] | string[];
}

const BerthPricing = ({ className, data, loading, refetchQueries }: BerthPricingProps) => {
  const { t, i18n } = useTranslation();

  const berthPricesCols: Column<BerthPrice>[] = [
    {
      Header: t('pricing.berths.width') || '',
      accessor: 'name',
      width: COLUMN_WIDTH.L,
    },
    {
      Header: getPriceTier(PriceTier.TIER_1),
      accessor: PriceTier.TIER_1,
      Cell: ({ cell: { value } }) => (value ? formatPrice(value, i18n.language) : '-'),
    },
    {
      Header: getPriceTier(PriceTier.TIER_2),
      accessor: PriceTier.TIER_2,
      Cell: ({ cell: { value } }) => (value ? formatPrice(value, i18n.language) : '-'),
    },
    {
      Header: getPriceTier(PriceTier.TIER_3),
      accessor: PriceTier.TIER_3,
      Cell: ({ cell: { value } }) => (value ? formatPrice(value, i18n.language) : '-'),
    },
  ];

  return (
    <Card className={className}>
      <CardHeader title={t('pricing.berths.title')} />
      <CardBody>
        <Section>{t('pricing.berths.description')}</Section>
        <Table
          columns={berthPricesCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={getBerthsData(data)}
          loading={loading}
          theme="basic"
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
    </Card>
  );
};

export default BerthPricing;
