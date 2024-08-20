import React from 'react';
import { OrderStatus, ProductServiceType } from '../../@types/__generated__/globalTypes';
import { IconProps } from '../../common/icons';

export interface SelectedProduct {
  productId: string;
  orderId: string;
}

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
  status: OrderStatus;
  fixedProducts: Product[];
  optionalProducts: Product[];
}

export type PlaceProperty = {
  prop: boolean | null;
  key: string;
  icon: (props: IconProps) => React.ReactElement | null;
};
