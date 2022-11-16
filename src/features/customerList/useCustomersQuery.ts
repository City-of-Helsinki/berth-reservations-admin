// NOTE 2022-02-28
// The berthProfiles query suffered from severe performance issues. Multiple
// approaches were attempted server side, but to no avail.

// This approach attempts to diminish the impact of the performance issue on the
// user experience by using the profile query to find profiles when a
// berthProfiles specific filter isn't used.

// After berthProfiles query is performant, i.e. it does not fail with empty
// filters, this hook should be simplified to only use the berthProfiles query.

import { useQuery } from '@apollo/react-hooks';

import { CustomerGroup, InvoicingType } from '../../@types/__generated__/globalTypes';
import { limitedCustomerSearchFeatureFlag } from '../../common/utils/featureFlags';
import {
  CUSTOMERS,
  CUSTOMERSVariables as CUSTOMERS_VARS,
  CUSTOMERS_berthProfiles_edges as CUSTOMERS_BERTH_PROFILES_EDGES,
} from './__generated__/CUSTOMERS';
import {
  PROFILE_CUSTOMERS,
  PROFILE_CUSTOMERSVariables as PROFILE_CUSTOMERS_VARS,
  PROFILE_CUSTOMERS_profiles_edges as PROFILE_CUSTOMERS_PROFILES_EDGES,
} from './__generated__/PROFILE_CUSTOMERS';
import { ProfileFragment } from './__generated__/ProfileFragment';
import { CUSTOMERS_QUERY, CUSTOMER_GROUPS_QUERY, PROFILE_CUSTOMERS_QUERY } from './queries';
import { CustomerListTableFilters } from './customerListTableFilters/types';

enum Query {
  PROFILE,
  BERTH_PROFILE,
  ORGANIZATION,
}

type Config = Omit<CustomerListTableFilters, 'dateInterval'> & {
  startDate?: string;
  endDate?: string;
  apiToken: string;
} & {
  first: number;
  after?: string;
  orderBy?: string;
  firstName?: string;
  lastName?: string;
  organizationName?: string;
  email?: string;
  address?: string;
  stickerNumber?: string;
  boatRegistrationNumber?: string;
  invoicingType?: InvoicingType;
};

export default function useCustomersQuery({
  first,
  after,
  orderBy,
  firstName,
  lastName,
  organizationName,
  email,
  address,
  apiToken,
  ...tableFilters
}: Config) {
  const sharedFilters = {
    first,
    after,
    orderBy,
    firstName,
    lastName,
    email,
    address,
  };

  const getActiveQuery = () => {
    if (Object.values(tableFilters).filter((value) => value).length > 0 && !organizationName) {
      return Query.BERTH_PROFILE;
    }
    if (organizationName) {
      return Query.ORGANIZATION;
    }
    return Query.PROFILE;
  };

  const activeQuery = getActiveQuery();

  const profilesQuery = useQuery<PROFILE_CUSTOMERS, PROFILE_CUSTOMERS_VARS>(PROFILE_CUSTOMERS_QUERY, {
    variables: sharedFilters,
    fetchPolicy: 'no-cache',
    skip: activeQuery !== Query.PROFILE,
  });

  const { harborIds, ...delegatedFilters } = tableFilters;
  const berthProfilesQuery = useQuery<CUSTOMERS, CUSTOMERS_VARS>(CUSTOMERS_QUERY, {
    variables: {
      ...sharedFilters,
      ...delegatedFilters,
      harborIds,
      apiToken,
    },
    fetchPolicy: 'no-cache',
    skip:
      activeQuery !== Query.BERTH_PROFILE ||
      // If enabled, stop queries from being fired when a harbor hasn't been
      // selected. Filtering by harbor limits the result group enough so that
      // the query does not fail.
      (limitedCustomerSearchFeatureFlag() ? (harborIds?.length ?? 0) === 0 : false),
  });

  const organizationsQuery = useQuery<CUSTOMERS, CUSTOMERS_VARS>(CUSTOMER_GROUPS_QUERY, {
    variables: {
      first,
      customerGroups: [CustomerGroup.COMPANY],
      apiToken,
    },
    fetchPolicy: 'no-cache',
    skip: activeQuery !== Query.ORGANIZATION,
  });

  const queryResult = (query: Query) => {
    const mapProfiles = (
      profiles: (PROFILE_CUSTOMERS_PROFILES_EDGES | CUSTOMERS_BERTH_PROFILES_EDGES | null)[] | undefined
    ) => {
      return profiles?.map((profileEdge) => profileEdge?.node) as (ProfileFragment | undefined | null)[];
    };

    switch (query) {
      case Query.PROFILE:
        return {
          ...profilesQuery,
          count: profilesQuery.data?.profiles?.count,
          profiles: mapProfiles(profilesQuery.data?.profiles?.edges),
        };
      case Query.ORGANIZATION:
        return {
          ...organizationsQuery,
          count: organizationsQuery.data?.berthProfiles?.count,
          // There's no direct endpoint to search organizations by name, so we'll just fetch them all
          // and filter them here.
          // For now this works well enough, since there are not too many results,
          // but if this changes, we should consider implementing own search endpoint for organizations.
          profiles: (mapProfiles(organizationsQuery.data?.berthProfiles?.edges) || []).filter((p) =>
            p?.organization?.name?.toLowerCase().includes(organizationName?.toLowerCase() || '')
          ),
        };
      case Query.BERTH_PROFILE:
        return {
          ...berthProfilesQuery,
          count: berthProfilesQuery.data?.berthProfiles?.count,
          profiles: mapProfiles(berthProfilesQuery.data?.berthProfiles?.edges),
        };
    }
  };

  return queryResult(activeQuery);
}
