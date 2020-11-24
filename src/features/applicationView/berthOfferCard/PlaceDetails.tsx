import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { formatDimension } from '../../../common/utils/format';
import { LeaseDetails } from './types';
import MaintenanceBriefPlaceholder from '../../../common/maintenancePlaceholders/MaintenanceBriefPlaceholder';
import { berthAccessibilityFeatureFlag } from '../../../common/utils/featureFlags';

export type PlaceDetailsProps = Pick<
  LeaseDetails,
  'berthMooringType' | 'berthWidth' | 'berthLength' | 'berthDepth' | 'berthIsAccessible' | 'berthComment'
>;

const PlaceDetails = ({
  berthMooringType,
  berthWidth,
  berthLength,
  berthDepth,
  berthIsAccessible,
  berthComment,
}: PlaceDetailsProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <>
      <Section>
        <LabelValuePair
          label={t('common.terminology.mooringType')}
          value={t([`common.mooringTypes.${berthMooringType}`])}
        />
        <LabelValuePair label={t('common.terminology.width')} value={formatDimension(berthWidth, language)} />
        <LabelValuePair label={t('common.terminology.length')} value={formatDimension(berthLength, language)} />
        <LabelValuePair label={t('common.terminology.depth')} value={formatDimension(berthDepth, language)} />
      </Section>
      {berthAccessibilityFeatureFlag() && berthIsAccessible && (
        <Section>
          <span>{t('common.terminology.accessiblePlace')}</span>
        </Section>
      )}
      <Section>
        <MaintenanceBriefPlaceholder />
        <LabelValuePair label={t('common.terminology.comments')} value={berthComment} />
      </Section>
    </>
  );
};

export default PlaceDetails;
