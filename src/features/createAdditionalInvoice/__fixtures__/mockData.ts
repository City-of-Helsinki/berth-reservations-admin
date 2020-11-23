import {
  AdditionalProductTaxEnum,
  AdditionalProductType,
  PeriodType,
  PriceUnits,
  ProductServiceType,
} from '../../../@types/__generated__/globalTypes';
import { ADDITIONAL_SERVICES } from '../__generated__/ADDITIONAL_SERVICES';
import { CREATE_ADDITIONAL_INVOICE_createAdditionalProductOrder_order as CreateAddtionalInvoiceOrder } from '../__generated__/CREATE_ADDITIONAL_INVOICE';

export const additionalservices: ADDITIONAL_SERVICES = {
  optionalProducts: {
    __typename: 'AdditionalProductNodeConnection',
    edges: [
      {
        __typename: 'AdditionalProductNodeEdge',
        node: {
          __typename: 'AdditionalProductNode',
          id: 'a8400b59-534c-4934-b643-083a4273ca1a',
          service: ProductServiceType.DINGHY_PLACE,
          priceValue: 10,
          priceUnit: PriceUnits.AMOUNT,
          period: PeriodType.SEASON,
          productType: AdditionalProductType.OPTIONAL_SERVICE,
          taxPercentage: AdditionalProductTaxEnum.TAX_24_00,
        },
      },
      {
        __typename: 'AdditionalProductNodeEdge',
        node: {
          __typename: 'AdditionalProductNode',
          id: 'b8400b59-534c-4934-b643-083a4273ca1a',
          service: ProductServiceType.STORAGE_ON_ICE,
          priceValue: 16,
          priceUnit: PriceUnits.AMOUNT,
          period: PeriodType.SEASON,
          productType: AdditionalProductType.OPTIONAL_SERVICE,
          taxPercentage: AdditionalProductTaxEnum.TAX_24_00,
        },
      },
      {
        __typename: 'AdditionalProductNodeEdge',
        node: {
          __typename: 'AdditionalProductNode',
          id: 'c8400b59-534c-4934-b643-083a4273ca1a',
          service: ProductServiceType.STORAGE_ON_ICE,
          priceValue: 10,
          priceUnit: PriceUnits.AMOUNT,
          period: PeriodType.MONTH,
          productType: AdditionalProductType.OPTIONAL_SERVICE,
          taxPercentage: AdditionalProductTaxEnum.TAX_24_00,
        },
      },
    ],
  },
};

export const createdOrderMock: CreateAddtionalInvoiceOrder = {
  __typename: 'OrderNode',
  id: 'T3JkZXJOb2RlOmYwOWZkNWNjLTc3YzUtNGE2ZS1iMGMxLWI3ZDczMDNkZTk1Yw==',
  price: '0.00',
  totalPrice: '138.00',
  lease: {
    id: 'QmVydGhMZWFzZU5vZGU6N2Y1NWFkNDktODljOC00YzBjLWI4MzktZTI4MDE1N2Q5ZWI3',
    startDate: '2021-06-10',
    endDate: '2021-09-14',
    berth: {
      pier: {
        properties: {
          harbor: {
            id: 'SGFyYm9yTm9kZTowODg1ZjUwMi1kNTY2LTQ4MzItYTc4Mi1iMzEzNzU3MmJiYTQ=',
            properties: { name: 'Hietalahdenallas / Venesatama', __typename: 'HarborProperties' },
            __typename: 'HarborNode',
          },
          __typename: 'PierProperties',
        },
        __typename: 'PierNode',
      },
      __typename: 'BerthNode',
    },
    __typename: 'BerthLeaseNode',
  },
  orderLines: {
    edges: [
      {
        node: {
          product: {
            id: 'QWRkaXRpb25hbFByb2R1Y3ROb2RlOjY3MTRhMmNjLTQyYjgtNDMxNi1hZjMyLTVhZTZmMDMxYTM3MQ==',
            service: ProductServiceType.STORAGE_ON_ICE,
            __typename: 'AdditionalProductNode',
          },
          __typename: 'OrderLineNode',
        },
        __typename: 'OrderLineNodeEdge',
      },
    ],
    __typename: 'OrderLineNodeConnection',
  },
};
