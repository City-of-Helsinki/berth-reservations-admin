// NOTE 2022-02-28
// The berthProfiles query suffered from severe performance issues. Multiple
// approaches were attempted server side, but to no avail.

// This approach attempts to diminish the impact of the performance issue on the
// user experience by using the profile query to find profiles when a
// berthProfiles specific filter isn't used.

// After berthProfiles query is performant, i.e. it does not fail with empty
// filters, this hook should be simplified to only use the berthProfiles query.

import { useQuery } from '@apollo/react-hooks';

import { InvoicingType } from '../../@types/__generated__/globalTypes';
import { limitedCustomerSearchFeatureFlag } from '../../common/utils/featureFlags';
import { CUSTOMERS, CUSTOMERSVariables as CUSTOMERS_VARS } from './__generated__/CUSTOMERS';
import {
  PROFILE_CUSTOMERS,
  PROFILE_CUSTOMERSVariables as PROFILE_CUSTOMERS_VARS,
} from './__generated__/PROFILE_CUSTOMERS';
import { ProfileFragment } from './__generated__/ProfileFragment';
import { CUSTOMERS_QUERY, PROFILE_CUSTOMERS_QUERY } from './queries';
import { CustomerListTableFilters } from './customerListTableFilters/types';

enum Query {
  PROFILE = 'profile',
  BERTH_PROFILE = 'berthProfile',
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
  const preferredQuery =
    Object.values(tableFilters).filter((value) => value).length > 0 ? Query.BERTH_PROFILE : Query.PROFILE;

  const profilesQuery = useQuery<PROFILE_CUSTOMERS, PROFILE_CUSTOMERS_VARS>(PROFILE_CUSTOMERS_QUERY, {
    variables: sharedFilters,
    fetchPolicy: 'no-cache',
    skip: preferredQuery !== Query.PROFILE,
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
      preferredQuery !== Query.BERTH_PROFILE ||
      // If enabled, stop queries from being fired when a harbor hasn't been
      // selected. Filtering by harbor limits the result group enough so that
      // the query does not fail.
      (limitedCustomerSearchFeatureFlag() ? (harborIds?.length ?? 0) === 0 : false),
  });

  const queryResult = preferredQuery === Query.PROFILE ? profilesQuery : berthProfilesQuery;

  return {
    ...queryResult,
    count:
      preferredQuery === Query.PROFILE
        ? profilesQuery?.data?.profiles?.count
        : berthProfilesQuery?.data?.berthProfiles?.count,
    profiles: (preferredQuery === Query.PROFILE
      ? profilesQuery?.data?.profiles?.edges
      : berthProfilesQuery?.data?.berthProfiles?.edges
    )?.map((profileEdge) => profileEdge?.node) as (ProfileFragment | undefined | null)[],
  };
}
