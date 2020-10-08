import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../section/Section';
import LabelValuePair from '../../../labelValuePair/LabelValuePair';
import { formatDimension, formatWeight } from '../../../utils/format';
import { UnmarkedWsNoticeDetailsProps } from '../../UnmarkedWsNoticeDetails';

type BoatDetailsProps = Pick<
  UnmarkedWsNoticeDetailsProps,
  | 'boatType'
  | 'boatRegistrationNumber'
  | 'boatWidth'
  | 'boatLength'
  | 'boatDraught'
  | 'boatWeight'
  | 'boatName'
  | 'boatModel'
>;
const BoatDetails = ({
  boatType,
  boatRegistrationNumber,
  boatWidth,
  boatLength,
  boatDraught,
  boatWeight,
  boatName,
  boatModel,
}: BoatDetailsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Section title={t('applicationList.applicationDetails.boatInfo')}>
        <LabelValuePair label={t('applicationList.applicationDetails.boatType')} value={boatType} />
        <LabelValuePair
          label={t('applicationList.applicationDetails.registrationNumber')}
          value={boatRegistrationNumber}
        />
      </Section>
      <Section>
        <LabelValuePair
          label={t('applicationList.applicationDetails.boatWidth')}
          value={formatDimension(boatWidth, i18n.language)}
        />
        <LabelValuePair
          label={t('applicationList.applicationDetails.boatLength')}
          value={formatDimension(boatLength, i18n.language)}
        />
        <LabelValuePair
          label={t('applicationList.applicationDetails.boatDepth')}
          value={formatDimension(boatDraught, i18n.language)}
        />
        <LabelValuePair
          label={t('applicationList.applicationDetails.boatWeight')}
          value={formatWeight(boatWeight, i18n.language)}
        />
      </Section>
      <Section>
        <LabelValuePair label={t('applicationList.applicationDetails.boatName')} value={boatName} />
        <LabelValuePair label={t('applicationList.applicationDetails.boatBrand')} value={boatModel} />
      </Section>
    </>
  );
};

export default BoatDetails;
