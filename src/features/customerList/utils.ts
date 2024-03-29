import {
  CUSTOMERS_berthProfiles_edges_node as ProfileNode,
  CUSTOMERS_berthProfiles_edges_node_berthLeases_edges as BerthLeaseEdge,
  CUSTOMERS_berthProfiles_edges_node_berthLeases_edges_node as BerthLeaseNode,
} from './__generated__/CUSTOMERS';
import { ProfileFragment } from './__generated__/ProfileFragment';
import { CustomerData, CustomerListApplication, CustomerListBerthLeases, CustomerListBoat } from './types';

const getBoats = (profile: ProfileNode): CustomerListBoat[] | undefined => {
  return profile.boats?.edges
    .filter((edge) => edge && edge.node)
    .map((edge) => {
      return {
        id: edge?.node?.id ?? '',
        name: edge?.node?.name ?? '',
      };
    });
};

const getApplications = (profile: ProfileNode): CustomerListApplication[] | undefined => {
  return profile.berthApplications?.edges
    .filter((edge) => edge && edge.node)
    .map((edge) => {
      return {
        id: edge?.node?.id ?? '',
        createdAt: edge?.node?.createdAt,
      };
    });
};

function getBerthLeases(profile: ProfileNode): CustomerListBerthLeases[] | undefined {
  return profile.berthLeases?.edges
    .filter((edge: BerthLeaseEdge | null): edge is BerthLeaseEdge & { node: BerthLeaseNode } => !!(edge && edge.node))
    .map(({ node }) => {
      const { id, isActive } = node;

      const status = node.status;
      const berth = node.berth;
      const berthNumber = berth.number;
      const harborName = berth.pier.properties?.harbor?.properties?.name ?? '';
      const pierIdentifier = berth.pier?.properties?.identifier ?? '';
      const title = `${harborName} ${pierIdentifier} ${berthNumber}`;

      return {
        id,
        isActive,
        title,
        status,
      };
    });
}

export const getCustomersData = (profiles?: (ProfileFragment | undefined | null)[]): CustomerData[] => {
  const customerData = profiles?.reduce((acc: CustomerData[], profile?: ProfileFragment | null) => {
    if (profile) {
      const boats = getBoats(profile) ?? [];
      const applications = getApplications(profile) ?? [];
      const berthLeases = getBerthLeases(profile) ?? [];

      const { organization, primaryAddress } = profile;

      const profileData: CustomerData = {
        address: organization?.address ?? primaryAddress?.address,
        city: organization?.city ?? primaryAddress?.city,
        email: profile.primaryEmail?.email,
        id: profile.id,
        name: organization?.name || `${profile.lastName} ${profile.firstName}`,
        organization: organization,
        phone: profile.primaryPhone?.phone ?? undefined,
        postalCode: organization?.postalCode ?? primaryAddress?.postalCode,
        comment: profile.comment,
        berthsColumnData: '',
        invoicesColumnData: '',
        boatsColumnData: '',
        boats,
        applications,
        berthLeases,
        customerGroup: profile.customerGroup,
      };
      return [...acc, profileData];
    }
    return acc;
  }, []);

  return customerData ?? [];
};
