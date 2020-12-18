import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import { HarborTiers as HarborTiersData } from './__generated__/HarborTiers';
import { getHarborTiersData } from './utils';
import InternalLink from '../../../common/internalLink/InternalLink';

export interface HarborTiersCol {
  id: string;
  name: string;
  tiers: string;
}

export interface HarborTiersProps {
  className?: string;
  loading: boolean;
  data: HarborTiersData | null | undefined;
}

const HarborTiers = ({ className, loading, data }: HarborTiersProps) => {
  const { t } = useTranslation();

  const harborTiersCols: Column<HarborTiersCol>[] = [
    {
      Header: t('pricing.harborTiers.harbor') || '',
      accessor: 'name',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.L,
      Cell: ({ cell }) => <InternalLink to={`/harbors/${cell.row.original.id}`}>{cell.value}</InternalLink>,
    },
    {
      Header: t('pricing.harborTiers.tiers') || '',
      accessor: 'tiers',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
  ];

  const tableData = getHarborTiersData(data);

  return (
    <Card className={className}>
      <CardHeader title={t('pricing.harborTiers.title')} />
      <CardBody>
        <Table
          columns={harborTiersCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={tableData}
          loading={loading}
          theme="basic"
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
    </Card>
  );
};

export default HarborTiers;
