import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-table';
import { useMutation } from '@apollo/react-hooks';

import Card from '../../../common/card/Card';
import CardHeader from '../../../common/cardHeader/CardHeader';
import CardBody from '../../../common/cardBody/CardBody';
import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import Section from '../../../common/section/Section';
import { formatPrice, formatPercentage } from '../../../common/utils/format';
import Text from '../../../common/text/Text';
import EditForm, { EDIT_FORM_TYPE } from '../editModal/EditForm';
import { HarborServicePricing as HarborServicePricingData } from './__generated__/HarborServicePricing';
import { getHarborServicesData } from './utils';
import { getPeriodTKey, getProductServiceTKey } from '../../../common/utils/translations';
import { PeriodType, ProductServiceType, PriceUnits } from '../../../@types/__generated__/globalTypes';
import { UPDATE_HARBOR_SERVICE_PRICE_MUTATION } from './mutations';
import {
  UPDATE_HARBOR_SERVICE_PRICE,
  UPDATE_HARBOR_SERVICE_PRICEVariables as UPDATE_HARBOR_SERVICE_PRICE_VARS,
} from './__generated__/UPDATE_HARBOR_SERVICE_PRICE';
import Modal from '../../../common/modal/Modal';

export interface HarborService {
  id: string;
  service: ProductServiceType;
  price: number;
  unit: PriceUnits;
  period: PeriodType;
}

export interface HarborServicePricingProps {
  data: HarborServicePricingData | undefined | null;
  loading: boolean;
  className?: string;
}

const HarborServicePricing = ({ data, loading, className }: HarborServicePricingProps) => {
  const { t, i18n } = useTranslation();
  const [editRowValues, setEditRowValues] = useState<HarborService>();
  const [updateHarborServicePrice] = useMutation<UPDATE_HARBOR_SERVICE_PRICE, UPDATE_HARBOR_SERVICE_PRICE_VARS>(
    UPDATE_HARBOR_SERVICE_PRICE_MUTATION
  );

  const harborServicesCols: Column<HarborService>[] = [
    {
      Header: t('pricing.harborServices.service') || '',
      width: COLUMN_WIDTH.L,
      accessor: ({ service }) => t(getProductServiceTKey(service)),
      id: 'service',
    },
    {
      Header: t('pricing.harborServices.price') || '',
      width: COLUMN_WIDTH.S,
      accessor: ({ price, unit }) => {
        switch (unit) {
          case PriceUnits.AMOUNT:
            return formatPrice(price, i18n.language);
          case PriceUnits.PERCENTAGE:
            return formatPercentage(price, i18n.language);
          default:
            return price;
        }
      },
      id: 'price',
    },
    {
      Header: t('pricing.harborServices.period') || '',
      width: COLUMN_WIDTH.S,
      accessor: ({ period }) => t(getPeriodTKey(period)),
      id: 'period',
    },
    {
      id: 'edit',
      Header: t('common.edit') || '',
      sortType: 'none',
      width: COLUMN_WIDTH.S,
      Cell: ({ row }: { row: Row<HarborService> }) => (
        <button onClick={() => setEditRowValues(row.original)}>
          <Text color="brand">{t('common.edit')}</Text>
        </button>
      ),
    },
  ];

  const handleSubmit = async ({ id, price, unit }: HarborService) => {
    await updateHarborServicePrice({
      variables: { input: { id, priceValue: price, priceUnit: unit } },
    });

    setEditRowValues(undefined);
  };

  const handleClose = () => setEditRowValues(undefined);

  return (
    <>
      <Card className={className}>
        <CardHeader title={t('pricing.harborServices.title')} />
        <CardBody>
          <Section>{t('pricing.harborServices.description')}</Section>
          <Table
            columns={harborServicesCols}
            initialState={{ sortBy: [{ id: 'service', desc: false }] }}
            data={getHarborServicesData(data)}
            loading={loading}
            theme="basic"
            renderEmptyStateRow={() => t('common.notification.noData.description')}
          />
        </CardBody>
      </Card>
      {editRowValues && (
        <Modal isOpen={true} label={t('pricing.editModalHeading').toUpperCase()} toggleModal={handleClose}>
          <EditForm
            closeModal={handleClose}
            formType={EDIT_FORM_TYPE.HARBOR_SERVICES}
            initialValues={editRowValues}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
};

export default HarborServicePricing;
