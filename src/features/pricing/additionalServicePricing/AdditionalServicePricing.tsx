import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-table';
import { useMutation } from '@apollo/react-hooks';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import Text from '../../../common/text/Text';
import EditForm, { EDIT_FORM_TYPE } from '../editModal/EditForm';
import { AdditionalServicePricing as AdditionalServicePricingData } from './__generated__/AdditionalServicePricing';
import { getAdditionalServiceData } from './utils';
import { getPeriodTKey, getProductServiceTKey, getProductTax } from '../../../common/utils/translations';
import { PeriodType, ProductServiceType, AdditionalProductTaxEnum } from '../../../@types/__generated__/globalTypes';
import { UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION } from './mutations';
import { UPDATE_ADDITIONAL_SERVICE_PRICE } from './__generated__/UPDATE_ADDITIONAL_SERVICE_PRICE';
import { UPDATE_HARBOR_SERVICE_PRICEVariables as UPDATE_HARBOR_SERVICE_PRICE_VARS } from '../harborServicePricing/__generated__/UPDATE_HARBOR_SERVICE_PRICE';
import { formatPrice } from '../../../common/utils/format';
import Modal from '../../../common/modal/Modal';

export interface AdditionalService {
  id: string;
  service: ProductServiceType;
  price: number;
  tax: AdditionalProductTaxEnum;
  period: PeriodType;
}

export interface AdditionalServicePricingProps {
  data: AdditionalServicePricingData | undefined | null;
  loading: boolean;
  className?: string;
}

const AdditionalServicePricing = ({ data, loading, className }: AdditionalServicePricingProps) => {
  const { t, i18n } = useTranslation();

  const [editRowValues, setEditRowValues] = useState<AdditionalService>();
  const [updateHarborServicePrice] = useMutation<UPDATE_ADDITIONAL_SERVICE_PRICE, UPDATE_HARBOR_SERVICE_PRICE_VARS>(
    UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION
  );

  const additionalServicesCols: Column<AdditionalService>[] = [
    {
      Header: t('pricing.additionalServices.service') || '',
      width: COLUMN_WIDTH.L,
      accessor: ({ service }) => t(getProductServiceTKey(service)),
      id: 'service',
    },
    {
      Header: t('pricing.additionalServices.price') || '',
      width: COLUMN_WIDTH.S,
      accessor: ({ price }) => formatPrice(price, i18n.language),
      id: 'price',
    },
    {
      Header: t('pricing.additionalServices.tax') || '',
      width: COLUMN_WIDTH.S,
      accessor: ({ tax }) => getProductTax(tax, i18n.language),
      id: 'tax',
    },
    {
      Header: t('pricing.additionalServices.period') || '',
      width: COLUMN_WIDTH.S,
      accessor: ({ period }) => t(getPeriodTKey(period)),
      id: 'period',
    },
    {
      id: 'edit',
      Header: t('common.edit') || '',
      sortType: 'none',
      width: COLUMN_WIDTH.S,
      Cell: ({ row }: { row: Row<AdditionalService> }) => (
        <button onClick={() => setEditRowValues(row.original)}>
          <Text color="brand">{t('common.edit')}</Text>
        </button>
      ),
    },
  ];

  const handleSubmit = async ({ id, price, period, tax }: AdditionalService) => {
    await updateHarborServicePrice({
      variables: { input: { id, priceValue: price, period, taxPercentage: tax } },
    });

    setEditRowValues(undefined);
  };

  const handleClose = () => setEditRowValues(undefined);

  return (
    <>
      <Card className={className}>
        <CardHeader title={t('pricing.additionalServices.title')} />
        <CardBody>
          <Table
            columns={additionalServicesCols}
            initialState={{ sortBy: [{ id: 'service', desc: false }] }}
            data={getAdditionalServiceData(data)}
            loading={loading}
            theme="basic"
            renderEmptyStateRow={() => t('common.notification.noData.description')}
          />
        </CardBody>
      </Card>
      {editRowValues && (
        <Modal isOpen toggleModal={handleClose} label={t('pricing.editModalHeading').toUpperCase()}>
          <EditForm
            closeModal={handleClose}
            formType={EDIT_FORM_TYPE.ADDITIONAL_SERVICES}
            initialValues={editRowValues}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
};

export default AdditionalServicePricing;
