import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../common/section/Section';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import { formatPrice } from '../../common/utils/format';
import { getProductServiceTKey } from '../../common/utils/translations';
import { Order } from './types';
import { LeaseStatus } from '../../@types/__generated__/globalTypes';
import Button from '../../common/button/Button';

export interface OrderSectionProps {
  leaseStatus: LeaseStatus | null;
  order: Order;
  editAdditionalServices: () => void;
}

const OrderSection = ({ leaseStatus, order, editAdditionalServices }: OrderSectionProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Section title={`${t('common.terminology.orderNumber').toUpperCase()}: ${order.orderNumber}`}>
      <Section>
        <LabelValuePair
          label={t('common.terminology.basePrice')}
          value={formatPrice(order.price, language)}
          align={'right'}
        />
        {order.fixedProducts.map((product, i) => (
          <LabelValuePair
            key={i}
            label={t(getProductServiceTKey(product.name))}
            value={formatPrice(product.price, language)}
            align={'right'}
          />
        ))}
      </Section>
      <Section>
        <LabelValuePair
          label={t('offer.invoicing.additionalServices')}
          value={
            <Button
              size="small"
              onClick={() => editAdditionalServices()}
              disabled={leaseStatus !== LeaseStatus.DRAFTED}
            >
              {t('common.edit')}
            </Button>
          }
          align={'right'}
        />
        {order.optionalProducts.map((product, i) => (
          <LabelValuePair
            key={i}
            label={t(getProductServiceTKey(product.name))}
            value={formatPrice(product.price, language)}
            align={'right'}
          />
        ))}
      </Section>
      <hr />
      <Section>
        <LabelValuePair
          label={t('common.total').toUpperCase()}
          value={formatPrice(order.totalPrice, language)}
          align={'right'}
        />
      </Section>
    </Section>
  );
};

export default OrderSection;
