import { CUSTOMERS } from './__generated__/CUSTOMERS';

export interface CustomerData {
  id?: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
}

export const getCustomersData = (data: CUSTOMERS | undefined) => {
  return (
    data?.profiles?.edges.reduce<CustomerData[]>((acc, profile) => {
      if (profile?.node) {
        const profileData = {
          id: profile?.node?.id,
          firstName: profile?.node?.firstName,
          lastName: profile?.node?.lastName,
          nickname: profile?.node?.nickname || undefined,
        };
        return [...acc, profileData];
      }
      return acc;
    }, []) ?? []
  );
};
