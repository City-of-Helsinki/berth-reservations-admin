import { CUSTOMERS } from './__generated__/CUSTOMERS';

export interface CustomerData {
  id?: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
}

export const getCustomersData = (
  data: CUSTOMERS | undefined
): Array<CustomerData> => {
  if (data?.profiles?.edges?.length) {
    const profileData: Array<CustomerData> = data?.profiles?.edges?.map(
      profile => {
        return {
          id: profile?.node?.id,
          firstName: profile?.node?.firstName,
          lastName: profile?.node?.lastName,
          nickname: profile?.node?.nickname || undefined,
        };
      }
    );
    return profileData;
  }
  return [];
};
