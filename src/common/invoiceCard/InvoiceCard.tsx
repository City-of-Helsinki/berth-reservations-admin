import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Card from '../card/Card';
import styles from './invoiceCard.module.scss';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import Grid from '../grid/Grid';
import Section from '../section/Section';
import Property from '../property/Property';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import { formatPrice } from '../utils/format';
import { getProductServiceTKey } from '../utils/translations';
import Text from '../text/Text';
import { IconProps } from '../icons';
import { ProductServiceType } from '../../@types/__generated__/globalTypes';

export interface Product {
  id: string;
  name: ProductServiceType;
  price: number;
  orderId: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  price: number;
  totalPrice: number;
  fixedProducts: Product[];
  optionalProducts: Product[];
}

export interface InvoiceCardProps {
  buttonsLeft: React.ReactNode;
  buttonsRight: React.ReactNode;
  className?: string;
  editAdditionalServices: () => void;
  order: Order | null;
  placeType: string;
  placeName: React.ReactNode;
  placeDetails: React.ReactNode;
  placeProperties: {
    prop: boolean | null;
    key: string;
    icon: (props: IconProps) => React.ReactElement | null;
  }[];
  title: string;
}

const InvoiceCard = ({
  buttonsLeft,
  buttonsRight,
  className,
  editAdditionalServices,
  order,
  placeDetails,
  placeName,
  placeProperties,
  placeType,
  title,
}: InvoiceCardProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const isNotNull = (property: boolean | null): property is boolean => property !== null;

  const renderOrder = () => {
    order = order as Order;
    return (
      <Section title={`${t('offer.billing.title').toUpperCase()} nro: ${order.orderNumber}`}>
        <Section>
          <LabelValuePair label={t('offer.billing.basePrice')} value={formatPrice(order.price, language)} />
          {order.fixedProducts.map((product) => (
            <LabelValuePair
              key={product.id}
              label={t(getProductServiceTKey(product.name))}
              value={formatPrice(product.price, language)}
            />
          ))}
        </Section>
        <Section>
          <LabelValuePair
            label={t('offer.billing.additionalServices')}
            value={
              <button onClick={() => editAdditionalServices()}>
                <Text color="brand">{t('common.edit')}</Text>
              </button>
            }
          />
          {order.optionalProducts.map((product) => (
            <LabelValuePair
              key={product.id}
              label={t(getProductServiceTKey(product.name))}
              value={formatPrice(product.price, language)}
            />
          ))}
        </Section>
        <hr />
        <Section>
          <LabelValuePair
            label={t('offer.billing.total').toUpperCase()}
            value={formatPrice(order.totalPrice, language)}
          />
        </Section>
      </Section>
    );
  };

  return (
    <Card className={classNames(styles.offerCard, className)}>
      <CardHeader title={title} />
      <CardBody>
        <Grid colsCount={3}>
          <Section title={placeType}>
            <Section>{placeName}</Section>
            <Section>
              <div className={styles.properties}>
                {placeProperties.map(
                  ({ prop, key, icon }) =>
                    isNotNull(prop) && (
                      <Property
                        className={styles.property}
                        key={key}
                        active={prop}
                        icon={icon}
                        label={t(`common.terminology.${key}`)}
                      />
                    )
                )}
              </div>
            </Section>
          </Section>
          {placeDetails && <Section title={t('invoiceCard.placeDetails.title').toUpperCase()}>{placeDetails}</Section>}
          {order && renderOrder()}
        </Grid>
        <hr />
        <div className={styles.buttonRow}>
          <div>{buttonsLeft}</div>
          <div>{buttonsRight}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InvoiceCard;
