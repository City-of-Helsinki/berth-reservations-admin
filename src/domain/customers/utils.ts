import { CUSTOMERS } from './__generated__/CUSTOMERS';

export interface CustomerData {
  id: string;
  name: string;
  nickname: string;
}

export const getCustomersData = (data: CUSTOMERS | undefined) => {
  return data?.profiles?.edges.reduce<CustomerData[]>((acc, profile) => {
    if (profile?.node) {
      const profileData = {
        name: `${profile.node.firstName} ${profile.node.lastName}`,
        id: profile.node.id,
        nickname: profile.node.nickname || '',
      };
      return [...acc, profileData];
    }
    return acc;
  }, []);
};
