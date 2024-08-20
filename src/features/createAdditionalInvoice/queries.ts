import gql from 'graphql-tag';
import { ADDITIONAL_SERVICE_PRICING_FRAGMENT } from '../pricing/additionalServicePricing/fragments';

export const ADDITIONAL_SERVICES_QUERY = gql`
  query ADDITIONAL_SERVICES {
    optionalProducts: additionalProducts(productType: OPTIONAL_SERVICE) {
      ...AdditionalServicePricing
    }
  }
  ${ADDITIONAL_SERVICE_PRICING_FRAGMENT}
`;
