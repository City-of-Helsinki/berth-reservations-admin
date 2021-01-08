import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';
import { useTranslation } from 'react-i18next';
import { getOperationName } from 'apollo-link';

import Pricing from './Pricing';
import { PRICING_QUERY } from './queries';
import { PRICING } from './__generated__/PRICING';
import { AdditionalServiceValues } from './additionalServicePricing/form/AdditionalServicesForm';
import {
  ADD_ADDITIONAL_SERVICE_PRICE,
  ADD_ADDITIONAL_SERVICE_PRICEVariables as ADD_ADDITIONAL_SERVICE_PRICE_VARS,
} from './additionalServicePricing/__generated__/ADD_ADDITIONAL_SERVICE_PRICE';
import {
  UPDATE_ADDITIONAL_SERVICE_PRICE,
  UPDATE_ADDITIONAL_SERVICE_PRICEVariables as UPDATE_ADDITIONAL_SERVICE_PRICE_VARS,
} from './additionalServicePricing/__generated__/UPDATE_ADDITIONAL_SERVICE_PRICE';
import {
  DELETE_ADDITIONAL_SERVICE_PRICE,
  DELETE_ADDITIONAL_SERVICE_PRICEVariables as DELETE_ADDITIONAL_SERVICE_PRICE_VARS,
} from './additionalServicePricing/__generated__/DELETE_ADDITIONAL_SERVICE_PRICE';
import {
  ADD_ADDITIONAL_SERVICE_PRICE_MUTATION,
  UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION,
  DELETE_ADDITIONAL_SERVICE_PRICE_MUTATION,
} from './additionalServicePricing/mutations';

const PricingContainer = () => {
  const { t } = useTranslation();

  const { loading, error, data } = useQuery<PRICING>(PRICING_QUERY);
  const [editingAdditionalServiceId, setEditingAdditionalServiceId] = useState<string>();
  const [isAddingAdditionalService, setIsAddingAdditionalService] = useState<boolean>(false);
  const [addAdditionalService] = useMutation<ADD_ADDITIONAL_SERVICE_PRICE, ADD_ADDITIONAL_SERVICE_PRICE_VARS>(
    ADD_ADDITIONAL_SERVICE_PRICE_MUTATION,
    { refetchQueries: [{ query: PRICING_QUERY }] }
  );
  const [updateAdditionalServicePrice] = useMutation<
    UPDATE_ADDITIONAL_SERVICE_PRICE,
    UPDATE_ADDITIONAL_SERVICE_PRICE_VARS
  >(UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION, { refetchQueries: [{ query: PRICING_QUERY }] });
  const [deleteAdditionalServicePrice] = useMutation<
    DELETE_ADDITIONAL_SERVICE_PRICE,
    DELETE_ADDITIONAL_SERVICE_PRICE_VARS
  >(DELETE_ADDITIONAL_SERVICE_PRICE_MUTATION, { refetchQueries: [{ query: PRICING_QUERY }] });
  const isAdditionalServiceModalOpen = !!editingAdditionalServiceId || isAddingAdditionalService;

  const handleCloseAdditionalServiceModal = () => {
    setEditingAdditionalServiceId(undefined);
    setIsAddingAdditionalService(false);
  };
  const handleSubmitAdditionalService = async (values: AdditionalServiceValues) => {
    const { service, period, priceUnit, priceValue, taxPercentage } = values;

    if (editingAdditionalServiceId) {
      await updateAdditionalServicePrice({
        variables: { input: { priceUnit, priceValue, taxPercentage, id: editingAdditionalServiceId } },
      });
      setEditingAdditionalServiceId(undefined);
    } else if (service && period) {
      await addAdditionalService({ variables: { input: { priceUnit, priceValue, taxPercentage, service, period } } });
      setIsAddingAdditionalService(false);
    }
  };
  const handleDeleteAdditionalService = async () => {
    if (editingAdditionalServiceId) {
      await deleteAdditionalServicePrice({
        variables: { input: { id: editingAdditionalServiceId } },
      });
      setEditingAdditionalServiceId(undefined);
    }
  };

  if (error)
    return (
      <Notification size="large" label={t('common.notification.error.label')} type="error">
        {t('common.notification.error.description')}
      </Notification>
    );

  return (
    <Pricing
      berthsData={data?.berthProducts}
      harborTiersData={data?.harbors}
      winterStorageData={data?.winterStorageAreas}
      harborServicesData={data?.additionalProducts}
      additionalServicesData={data?.optionalProducts}
      additionalServicesModal={{
        isModalOpen: isAdditionalServiceModalOpen,
        onAddServiceClick: () => setIsAddingAdditionalService(true),
        onEditRowClick: setEditingAdditionalServiceId,
        onCloseModal: handleCloseAdditionalServiceModal,
        editingServiceId: editingAdditionalServiceId,
        onSubmitForm: handleSubmitAdditionalService,
        onDelete: handleDeleteAdditionalService,
      }}
      loading={loading}
      refetchQueries={[getOperationName(PRICING_QUERY) || 'PRICING_QUERY']}
    />
  );
};

export default PricingContainer;
