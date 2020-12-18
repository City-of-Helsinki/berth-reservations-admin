import React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '../../../common/grid/Grid';
import Section from '../../../common/section/Section';
import Text from '../../../common/text/Text';
import { CustomerGroup, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import {
  CustomerListApplication,
  CustomerListBerthLeases,
  CustomerListBoat,
  CustomerListInvoice,
  CustomerListWinterStoragePlaces,
} from '../types';
import { formatDate } from '../../../common/utils/format';
import { getCustomerGroupKey } from '../../../common/utils/translations';

export interface CustomerDetailsProps {
  name: string;
  address?: string;
  postalCode?: string;
  city?: string;
  phone?: string;
  email?: string;
  berths: CustomerListBerthLeases[];
  winterStoragePlaces: CustomerListWinterStoragePlaces[];
  boats: CustomerListBoat[];
  applications: CustomerListApplication[];
  invoices: CustomerListInvoice[];
  comment: string | null;
  customerGroup: CustomerGroup | null;
}

const CustomerDetails = ({
  name,
  address,
  postalCode,
  city,
  phone,
  email,
  berths,
  winterStoragePlaces,
  boats,
  applications,
  invoices,
  comment,
  customerGroup,
}: CustomerDetailsProps) => {
  const { t, i18n } = useTranslation();
  const customerGroupKey = getCustomerGroupKey(customerGroup);

  const filterActiveBerths = (berth: CustomerListBerthLeases) => berth.isActive || berth.status === LeaseStatus.OFFERED;
  const activeBerths = berths.filter(filterActiveBerths);
  const pastBerths = berths.filter((berth) => !filterActiveBerths(berth));
  const renderBerthLine = (berth: CustomerListBerthLeases) => <div key={berth.id}>{berth.title}</div>;

  return (
    <div>
      <Grid colsCount={4}>
        <div>
          <Section title={t('common.terminology.customer').toUpperCase()}>{name}</Section>
          <Section>
            {address}
            <br />
            {postalCode} {city}
          </Section>
          <Section>
            {phone}
            <br />
            {email}
            <br />
            {t(customerGroupKey)}
          </Section>
        </div>
        <div>
          <Section title={t('common.terminology.berths').toUpperCase()}>{activeBerths.map(renderBerthLine)}</Section>
          {pastBerths.length > 0 && (
            <Section title={t('customerList.pastBerths').toUpperCase()}>{pastBerths.map(renderBerthLine)}</Section>
          )}
          <Section title={t('common.terminology.winterStoragePlaces').toUpperCase()}>
            {winterStoragePlaces.map((place) => (
              <div key={place.id}>{place.title}</div>
            ))}
          </Section>
          <Section title={t('common.terminology.boats').toUpperCase()}>
            {boats.map((boat) => (
              <div key={boat.id}>
                {boat.name.length > 0 ? boat.name : <Text italic>{t('common.terminology.unnamedBoat')}</Text>}
              </div>
            ))}
          </Section>
        </div>
        <div>
          <Section title={t('common.terminology.applications').toUpperCase()}>
            {applications.map((application) => (
              <div key={application.id}>{formatDate(application.createdAt, i18n.language)}</div>
            ))}
          </Section>
          <Section title={t('common.terminology.invoices').toUpperCase()}>
            {invoices.map((invoice) => (
              <div key={invoice.id}>{invoice.date}</div>
            ))}
          </Section>
        </div>
        <div>
          <Section title={t('common.terminology.comments').toUpperCase()}>{comment}</Section>
        </div>
      </Grid>
    </div>
  );
};

export default CustomerDetails;
