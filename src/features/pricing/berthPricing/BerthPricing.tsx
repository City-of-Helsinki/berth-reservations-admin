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
import styles from './berthPricing.module.scss';
import Text from '../../../common/text/Text';

export interface BerthPrice {
  id: string;
  productId: string | undefined;
  name: string;
  [PriceTier.TIER_1]: number | undefined;
  [PriceTier.TIER_2]: number | undefined;
  [PriceTier.TIER_3]: number | undefined;
}

export interface BerthPricingProps {
  data: BerthPricingData | undefined | null;
  loading: boolean;
  refetchQueries?: PureQueryOptions[] | string[];
}

const BerthPricing = ({ data, loading, refetchQueries }: BerthPricingProps) => {
  const { t, i18n } = useTranslation();

  const berthPricesCols: Column<BerthPrice>[] = [
    {
      Header: t('pricing.berths.width') || '',
      accessor: 'name',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.L,
    },
    {
      Header: getPriceTier(PriceTier.TIER_1),
      accessor: PriceTier.TIER_1,
      minWidth: COLUMN_WIDTH.S,
      Cell: ({ cell: { value } }) => (
        <div className={styles.grayCell}>{value ? formatPrice(value, i18n.language) : '-'}</div>
      ),
    },
    {
      Header: getPriceTier(PriceTier.TIER_2),
      accessor: PriceTier.TIER_2,
      minWidth: COLUMN_WIDTH.S,
      Cell: ({ cell: { value } }) => (
        <div className={styles.grayCell}>{value ? formatPrice(value, i18n.language) : '-'}</div>
      ),
    },
    {
      Header: getPriceTier(PriceTier.TIER_3),
      accessor: PriceTier.TIER_3,
      minWidth: COLUMN_WIDTH.S,
      Cell: ({ cell: { value } }) => (
        <div className={styles.grayCell}>{value ? formatPrice(value, i18n.language) : '-'}</div>
      ),
    },
  ];

  const pricingData = getBerthsData(data);

  return (
    <Card className={styles.berthPricing}>
      <CardHeader title={t('pricing.berths.title')} />
      <CardBody key="DEFAULT">
        <Text as="h3">{t('pricing.berths.defaultProducts')}</Text>
        <Section>{t('pricing.berths.description')}</Section>
        <Table
          columns={berthPricesCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={pricingData.DEFAULT}
          loading={loading}
          theme="basic"
          getCellProps={() => ({
            className: styles.tableCell,
          })}
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
      <CardBody key="VASIKKASAARI">
        <Text as="h3">{t('pricing.berths.vasikkasaari')}</Text>
        <Section>{t('pricing.berths.description')}</Section>
        <Table
          columns={berthPricesCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={pricingData.VASIKKASAARI}
          loading={loading}
          theme="basic"
          getCellProps={() => ({
            className: styles.tableCell,
          })}
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
      <CardBody key="DINGHY">
        <Text as="h3">{t('pricing.berths.dinghy')}</Text>
        <Section>{t('pricing.berths.description')}</Section>
        <Table
          columns={berthPricesCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={pricingData.DINGHY}
          loading={loading}
          theme="basic"
          getCellProps={() => ({
            className: styles.tableCell,
          })}
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
      <CardBody key="TRAILER">
        <Text as="h3">{t('pricing.berths.trailer')}</Text>
        <Section>{t('pricing.berths.description')}</Section>
        <Table
          columns={berthPricesCols}
          initialState={{ sortBy: [{ id: 'name', desc: false }] }}
          data={pricingData.TRAILER}
          loading={loading}
          theme="basic"
          getCellProps={() => ({
            className: styles.tableCell,
          })}
          renderEmptyStateRow={() => t('common.notification.noData.description')}
        />
      </CardBody>
    </Card>
  );
};

export default BerthPricing;
