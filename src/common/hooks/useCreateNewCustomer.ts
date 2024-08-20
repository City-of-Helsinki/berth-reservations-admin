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
  address: string;
  businessId: string;
  comment?: string;
  companyName: string;
  email: string;
  firstName: string;
  lastName: string;
  municipality: string;
  organizationType?: OrganizationType;
  phoneNumber: string;
  zipCode: string;
};

const useCreateNewCustomer = (
  refetchQueries?: Array<string | PureQueryOptions> | RefetchQueriesFunction,
  refetchFunction?: () => void
) => {
  const [createNewCustomer] = useMutation<CREATE_NEW_PROFILE, CREATE_NEW_PROFILE_VARS>(CREATE_NEW_PROFILE_MUTATION);

  const [createNewBerthProfile] = useMutation<CREATE_BERTH_SERVICE_PROFILE, CREATE_BERTH_SERVICE_PROFILE_VARS>(
    CREATE_BERTH_SERVICE_PROFILE_MUTATION,
    { refetchQueries, onCompleted: () => refetchFunction?.() }
  );

  return (customerInfo: CustomerInfo) => {
    const {
      address,
      businessId,
      companyName,
      comment,
      email,
      firstName,
      lastName,
      municipality,
      organizationType,
      phoneNumber,
      zipCode,
    } = customerInfo;

    // Private customer
    if (businessId === '') {
      createNewCustomer({
        variables: {
          addresses: [
            { address, postalCode: zipCode, city: municipality, primary: true, addressType: AddressType.NONE },
          ],
          email: email,
          firstName: firstName,
          lastName: lastName,
          phone: phoneNumber,
        },
      }).then(({ data }) => {
        if (!data?.createProfile?.profile?.id) {
          return;
        }
        return createNewBerthProfile({
          variables: {
            input: {
              id: data.createProfile.profile.id,
              comment: comment || undefined,
            },
          },
        });
      });
      return;
    }

    // Organization customer
    createNewCustomer({
      variables: {
        addresses: [],
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber,
      },
    }).then(({ data }) => {
      if (!data?.createProfile?.profile?.id) {
        return;
      }
      return createNewBerthProfile({
        variables: {
          input: {
            id: data.createProfile.profile.id,
            comment: comment || undefined,
            organization: {
              businessId,
              name: companyName,
              organizationType: organizationType ?? OrganizationType.COMPANY,
              address,
              postalCode: zipCode,
              city: municipality,
            },
          },
        },
      });
    });
  };
};

export default useCreateNewCustomer;
