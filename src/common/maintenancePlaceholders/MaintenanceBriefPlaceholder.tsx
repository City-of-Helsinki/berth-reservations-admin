import React from 'react';
import { useTranslation } from 'react-i18next';
import InternalLink from '../internalLink/InternalLink';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import { maintenanceFeatureFlag } from '../utils/featureFlags';

export interface MaintenanceInformationPlaceholderProps {
  placeholder?: null;
}

// TODO
const MaintenanceBriefPlaceholder = (props: MaintenanceInformationPlaceholderProps) => {
  const { t } = useTranslation();

  return maintenanceFeatureFlag() ? (
    <LabelValuePair
      label={t('common.terminology.maintenanceDetails') + ' (PLACEHOLDER)'}
      value={
        <>
          <InternalLink to="/">123</InternalLink>
          <br />
          <InternalLink to="/">456</InternalLink>
        </>
      }
    />
  ) : null;
};

export default MaintenanceBriefPlaceholder;
