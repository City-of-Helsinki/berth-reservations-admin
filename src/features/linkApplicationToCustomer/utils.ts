import {
  FILTERED_CUSTOMERS,
  FILTERED_CUSTOMERS_profiles_edges as PROFILE_EDGE,
  FILTERED_CUSTOMERS_profiles_edges_node as PROFILE_NODE,
  FILTERED_CUSTOMERS_profiles_edges_node_winterStorageLeases as LEASES,
} from './__generated__/FILTERED_CUSTOMERS';
import { CustomerGroup } from '../../@types/__generated__/globalTypes';

export interface CustomerData {
  id: string;
  name: string;
  city?: string;
  address?: string;
  berths?: string | null;
  winterStoragePlaces?: string | null;
  customerGroup: CustomerGroup | null;
}

export const getWinterStoragePlaces = (leases: LEASES | null): string | undefined =>
  leases?.edges
    .reduce<(string | null | undefined)[]>((acc, edge) => {
      if (edge?.node?.isActive) {
        // Add both winter storage and unmarked winter storage area names, even if undefined
        return [
          ...acc,
          edge?.node?.place?.winterStorageSection.properties?.area.properties?.name,
          edge?.node?.section?.properties?.area.properties?.name,
        ];
      }
      return acc;
    }, [])
    .filter(Boolean) // Filter out undefined
    .join(', ');

export const getFilteredCustomersData = (data?: FILTERED_CUSTOMERS): CustomerData[] => {
  if (!data?.profiles) return [];

  return data.profiles.edges.reduce<CustomerData[]>((acc, edge) => {
    const {
      id,
      firstName,
      lastName,
      primaryAddress,
      berthLeases,
      customerGroup,
      winterStorageLeases,
    } = (edge as PROFILE_EDGE).node as PROFILE_NODE;

    const berths = berthLeases?.edges
      .map((edge) => edge?.node?.berth?.pier.properties?.harbor.properties?.name)
      .join(', ');

    const winterStoragePlaces = getWinterStoragePlaces(winterStorageLeases);

    return [
      ...acc,
      {
        id,
        name: `${lastName}, ${firstName}`,
        city: primaryAddress?.city,
        address: primaryAddress?.address,
        berths,
        winterStoragePlaces,
        customerGroup,
      },
    ];
  }, []);
};
