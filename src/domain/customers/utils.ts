import { CUSTOMERS } from './__generated__/CUSTOMERS';

export interface CustomerData {
  id: string;
  name: string;
  nickname: string;
  // email: string | false | null;
  // phone: string | false | null;
}

export const getCustomersData = (data: CUSTOMERS | undefined) => {
  return data?.profiles?.edges.reduce<CustomerData[]>((acc, profile) => {
    if (profile?.node) {
      const profileData = {
        // email: profile.node.emails?.[0]?.email,
        name: `${profile.node.firstName} ${profile.node.lastName}`,
        id: profile.node.id,
        nickname: profile.node.nickname || '',
        // phone: profile.node.phones?.[0]?.phone,
      };
      return [...acc, profileData];
    }
    return acc;
  }, []);

  // return data?.profiles?.edges.map(profile => {
  //   if (profile?.node) {
  //     const profileData: CustomerData = {
  //       // email: profile.node.emails?.[0]?.email,
  //       firstName: profile.node.firstName,
  //       id: profile.node.id,
  //       lastName: profile.node.lastName,
  //       nickname: profile.node.nickname,
  //       // phone: profile.node.phones?.[0]?.phone,
  //     };
  //     return profileData;
  //   }
  //   return [];
  // });
};
