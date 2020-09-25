import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../common/section/Section';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { formatDimension } from '../../../common/utils/format';
import InternalLink from '../../../common/internalLink/InternalLink';
import { LeaseDetails } from './types';

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
      {berthIsAccessible && (
        <Section>
          <span>{t('common.terminology.accessiblePlace')}</span>
        </Section>
      )}
      <Section>
        <LabelValuePair
          label={t('invoiceCard.placeDetails.maintenanceDetails')}
          value={
            <>
              {/* TODO */}
              <InternalLink to="/">123</InternalLink>
              <br />
              <InternalLink to="/">456</InternalLink>
            </>
          }
        />
        <LabelValuePair label={t('common.terminology.comments')} value={berthComment} />
      </Section>
    </>
  );
};

export default PlaceDetails;
