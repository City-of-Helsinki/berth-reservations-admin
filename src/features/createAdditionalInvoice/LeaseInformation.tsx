import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../common/section/Section';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import { formatDate } from '../../common/utils/format';
import { CreateOrderBerthLease } from './types';

interface Props {
  berthLease: CreateOrderBerthLease;
}

export const LeaseInformation = ({ berthLease }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <Section>
      <LabelValuePair label={t('common.terminology.contract')} value={t('additionalInvoice.berthPlace')} />
      <LabelValuePair label={t('additionalInvoice.berthPlace')} value={berthLease.harborName} />
      <LabelValuePair
        label={t('additionalInvoice.contractPeriod')}
        value={`${formatDate(berthLease.startDate, i18n.language)} - ${formatDate(berthLease.endDate, i18n.language)}`}
      />
    </Section>
  );
};
