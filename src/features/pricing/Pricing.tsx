import React from 'react';
import { useTranslation } from 'react-i18next';
import { PureQueryOptions } from 'apollo-client';

import styles from './pricing.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import BerthPricing, { BerthPricingProps } from './berthPricing/BerthPricing';
import HarborTiers, { HarborTiersProps } from './harborTiers/HarborTiers';
import WinterStoragePricing, { WinterStoragePricingProps } from './winterStoragePricing/WinterStoragePricing';
import HarborServicePricing, { HarborServicePricingProps } from './harborServicePricing/HarborServicePricing';
import AdditionalServicePricing, {
  AdditionalServicePricingProps,
} from './additionalServicePricing/AdditionalServicePricing';
import PageContent from '../../common/pageContent/PageContent';
import Grid from '../../common/grid/Grid';

export interface PricingProps {
  berthsData: BerthPricingProps['data'];
  harborTiersData: HarborTiersProps['data'];
  winterStorageData: WinterStoragePricingProps['data'];
  harborServicesData: HarborServicePricingProps['data'];
  additionalServicesData: AdditionalServicePricingProps['data'];
  additionalServicesModal: Pick<
    AdditionalServicePricingProps,
    | 'isModalOpen'
    | 'onAddServiceClick'
    | 'onEditRowClick'
    | 'onCloseModal'
    | 'editingServiceId'
    | 'onSubmitForm'
    | 'onDelete'
  >;
  loading: boolean;
  refetchQueries?: PureQueryOptions[] | string[];
}

const Pricing = ({
  berthsData,
  harborTiersData,
  winterStorageData,
  harborServicesData,
  additionalServicesData,
  additionalServicesModal,
  loading,
  refetchQueries,
}: PricingProps) => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.pricing}>
      <PageTitle title={t('pricing.title')} />
      <Grid colsCount={2} className={styles.twoCols}>
        <BerthPricing data={berthsData} loading={loading} refetchQueries={refetchQueries} />
        <HarborTiers data={harborTiersData} loading={loading} />
      </Grid>
      <WinterStoragePricing data={winterStorageData} loading={loading} />
      <HarborServicePricing data={harborServicesData} loading={loading} />
      <AdditionalServicePricing {...additionalServicesModal} data={additionalServicesData} loading={loading} />
    </PageContent>
  );
};

export default Pricing;
