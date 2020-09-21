import { useMutation } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-client';
import { RefetchQueriesFunction } from '@apollo/react-common';

import {
  CREATE_NEW_PROFILE,
  CREATE_NEW_PROFILEVariables as CREATE_NEW_PROFILE_VARS,
} from '../mutations/__generated__/CREATE_NEW_PROFILE';
import { CREATE_BERTH_SERVICE_PROFILE_MUTATION, CREATE_NEW_PROFILE_MUTATION } from '../mutations/createProfile';
import {
  CREATE_BERTH_SERVICE_PROFILE,
  CREATE_BERTH_SERVICE_PROFILEVariables as CREATE_BERTH_SERVICE_PROFILE_VARS,
} from '../mutations/__generated__/CREATE_BERTH_SERVICE_PROFILE';
import { AddressType, OrganizationType } from '../../@types/__generated__/globalTypes';

export type CustomerInfo = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  municipality: string;
  businessId: string;
  companyName: string;
};

const useCreateNewCustomer = (refetchQueries?: Array<string | PureQueryOptions> | RefetchQueriesFunction) => {
  const [createNewCustomer] = useMutation<CREATE_NEW_PROFILE, CREATE_NEW_PROFILE_VARS>(CREATE_NEW_PROFILE_MUTATION, {
    refetchQueries,
  });

  const [createNewBerthProfile] = useMutation<CREATE_BERTH_SERVICE_PROFILE, CREATE_BERTH_SERVICE_PROFILE_VARS>(
    CREATE_BERTH_SERVICE_PROFILE_MUTATION,
    { refetchQueries }
  );

  return (customerInfo: CustomerInfo) => {
    const {
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      zipCode,
      municipality,
      businessId,
      companyName,
    } = customerInfo;

    if (businessId === '') {
      createNewCustomer({
        variables: {
          firstName: firstName,
          lastName: lastName,
          addresses: [
            { address, postalCode: zipCode, city: municipality, primary: true, addressType: AddressType.NONE },
          ],
          phone: phoneNumber,
          email: email,
        },
      }).then(({ data }) => {
        if (!data?.createProfile?.profile?.id) {
          return;
        }
        return createNewBerthProfile({
          variables: { input: { id: data.createProfile.profile.id } },
        });
      });
    } else {
      createNewCustomer({
        variables: {
          firstName: firstName,
          lastName: lastName,
          phone: phoneNumber,
          email: email,
        },
      }).then(({ data }) => {
        if (!data?.createProfile?.profile?.id) {
          return;
        }
        return createNewBerthProfile({
          variables: {
            input: {
              id: data.createProfile.profile.id,
              organization: {
                businessId,
                name: companyName,
                organizationType: OrganizationType.COMPANY,
                address,
                postalCode: zipCode,
                city: municipality,
              },
            },
          },
        });
      });
    }
  };
};

export default useCreateNewCustomer;
