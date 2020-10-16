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
  ADD_ADDITIONAL_SERVICE,
  ADD_ADDITIONAL_SERVICEVariables as ADD_ADDITIONAL_SERVICE_VARS,
} from './additionalServicePricing/__generated__/ADD_ADDITIONAL_SERVICE';
import {
  ADD_ADDITIONAL_SERVICE_MUTATION,
  UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION,
} from './additionalServicePricing/mutations';
import { UPDATE_ADDITIONAL_SERVICE_PRICE } from './additionalServicePricing/__generated__/UPDATE_ADDITIONAL_SERVICE_PRICE';
import { UPDATE_HARBOR_SERVICE_PRICEVariables as UPDATE_HARBOR_SERVICE_PRICE_VARS } from './harborServicePricing/__generated__/UPDATE_HARBOR_SERVICE_PRICE';

const PricingContainer = () => {
  const { t } = useTranslation();

  const { loading, error, data } = useQuery<PRICING>(PRICING_QUERY);
  const [editingAdditionalServiceId, setEditingAdditionalServiceId] = useState<string>();
  const [isAddingAdditionalService, setIsAddingAdditionalService] = useState<boolean>(false);
  const [addAdditionalService] = useMutation<ADD_ADDITIONAL_SERVICE, ADD_ADDITIONAL_SERVICE_VARS>(
    ADD_ADDITIONAL_SERVICE_MUTATION
  );
  const [updateAdditionalServicePrice] = useMutation<UPDATE_ADDITIONAL_SERVICE_PRICE, UPDATE_HARBOR_SERVICE_PRICE_VARS>(
    UPDATE_ADDITIONAL_SERVICE_PRICE_MUTATION
  );
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

  if (error)
    return (
      <Notification labelText={t('common.notification.error.label')} type="error">
        {t('common.notification.error.description')}
      </Notification>
    );

  return (
    <Pricing
      berthsData={data?.berthPriceGroups}
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
      }}
      loading={loading}
      refetchQueries={[getOperationName(PRICING_QUERY) || 'PRICING_QUERY']}
    />
  );
};

export default PricingContainer;
