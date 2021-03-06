import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-table';
import classNames from 'classnames';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import Text from '../../../common/text/Text';
import { AdditionalServicePricing as AdditionalServicePricingData } from './__generated__/AdditionalServicePricing';
import { getAdditionalServiceData } from './utils';
import { getPeriodTKey, getProductServiceTKey, getProductTax } from '../../../common/utils/translations';
import {
  PeriodType,
  ProductServiceType,
  AdditionalProductTaxEnum,
  PriceUnits,
} from '../../../@types/__generated__/globalTypes';
import { formatPercentage, formatPrice } from '../../../common/utils/format';
import Modal from '../../../common/modal/Modal';
import AdditionalServicesForm, { AdditionalServiceValues } from './form/AdditionalServicesForm';
import styles from './additionalServicePricing.module.scss';

export interface AdditionalService {
  id: string;
  service: ProductServiceType;
  priceValue: number;
  priceUnit: PriceUnits;
  taxPercentage: AdditionalProductTaxEnum;
  period: PeriodType;
}

export interface AdditionalServicePricingProps {
  data: AdditionalServicePricingData | undefined | null;
  loading: boolean;
  isModalOpen: boolean;
  editingServiceId?: string;
  className?: string;
  onEditRowClick(id: string): void;
  onAddServiceClick(): void;
  onSubmitForm(values: AdditionalServiceValues): void;
  onCloseModal(): void;
  onDelete(): void;
}

const AdditionalServicePricing = ({
  data,
  loading,
  className,
  isModalOpen,
  editingServiceId,
  onSubmitForm,
  onAddServiceClick,
  onEditRowClick,
  onCloseModal,
  onDelete,
}: AdditionalServicePricingProps) => {
  const { t, i18n } = useTranslation();

  const additionalServicesCols: Column<AdditionalService>[] = [
    {
      Header: t('pricing.additionalServices.service') || '',
      width: COLUMN_WIDTH.L,
      minWidth: COLUMN_WIDTH.L,
      accessor: ({ service }) => t(getProductServiceTKey(service)),
      id: 'service',
    },
    {
      Header: t('pricing.additionalServices.price') || '',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      accessor: ({ priceValue, priceUnit }) => {
        switch (priceUnit) {
          case PriceUnits.AMOUNT:
            return formatPrice(priceValue, i18n.language);
          case PriceUnits.PERCENTAGE:
            return formatPercentage(priceValue, i18n.language);
          default:
            return priceValue;
        }
      },
      id: 'priceValue',
    },
    {
      Header: t('pricing.additionalServices.tax') || '',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      accessor: ({ taxPercentage }) => getProductTax(taxPercentage, i18n.language),
      id: 'taxPercentage',
    },
    {
      Header: t('pricing.additionalServices.period') || '',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      accessor: ({ period }) => t(getPeriodTKey(period)),
      id: 'period',
    },
    {
      id: 'edit',
      Header: t('common.edit') || '',
      sortType: 'none',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      Cell: ({ row }: { row: Row<AdditionalService> }) => (
        <button onClick={() => onEditRowClick(row.original.id)}>
          <Text color="brand">{t('common.edit')}</Text>
        </button>
      ),
    },
  ];

  const initialValues = data?.edges.find((edge) => edge?.node?.id === editingServiceId)?.node;

  return (
    <>
      <Card className={classNames(styles.additionalServicePricing, className)}>
        <CardHeader title={t('pricing.additionalServices.title')} />
        <CardBody>
          <Table
            columns={additionalServicesCols}
            initialState={{ sortBy: [{ id: 'service', desc: false }] }}
            data={getAdditionalServiceData(data)}
            loading={loading}
            theme="basic"
            renderEmptyStateRow={() => t('common.notification.noData.description')}
            renderTableToolsBottom={() => (
              <button className={styles.addButton} onClick={onAddServiceClick}>
                <Text color="brand">{t('common.addNew')}</Text>
              </button>
            )}
          />
        </CardBody>
      </Card>
      <Modal isOpen={isModalOpen} toggleModal={onCloseModal}>
        <AdditionalServicesForm
          onCancel={onCloseModal}
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          editingServiceId={editingServiceId}
          onDelete={onDelete}
        />
      </Modal>
    </>
  );
};

export default AdditionalServicePricing;
