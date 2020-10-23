import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../common/section/Section';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import { formatPrice } from '../../common/utils/format';
import { getProductServiceTKey } from '../../common/utils/translations';
import Text from '../../common/text/Text';
import { Order } from './types';

export interface OrderSectionProps {
  order: Order;
  editAdditionalServices: () => void;
}

const OrderSection = ({ order, editAdditionalServices }: OrderSectionProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Section title={`${t('offer.invoicing.title').toUpperCase()}: ${order.orderNumber}`}>
      <Section>
        <LabelValuePair
          label={t('offer.invoicing.basePrice')}
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
            <button onClick={() => editAdditionalServices()}>
              <Text color="brand">{t('common.edit')}</Text>
            </button>
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
          label={t('offer.invoicing.total').toUpperCase()}
          value={formatPrice(order.totalPrice, language)}
          align={'right'}
        />
      </Section>
    </Section>
  );
};

export default OrderSection;
