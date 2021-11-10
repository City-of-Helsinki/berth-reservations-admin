import { ApplicationStatus, CustomerGroup } from '../../@types/__generated__/globalTypes';
import { INDIVIDUAL_APPLICATION_berthApplication as BERTH_APPLICATION } from '../../features/applicationView/__generated__/INDIVIDUAL_APPLICATION';
import { INDIVIDUAL_WINTER_STORAGE_APPLICATION_winterStorageApplication as WINTER_STORAGE_APPLICATION } from '../../features/winterStorageApplicationView/__generated__/INDIVIDUAL_WINTER_STORAGE_APPLICATION';
import { UNMARKED_WINTER_STORAGE_NOTICE_winterStorageNotice as WINTER_STORAGE_NOTICE } from '../../features/unmarkedWsNoticeView/__generated__/UNMARKED_WINTER_STORAGE_NOTICE';
import { CustomerProfileCardProps } from '../customerProfileCard/CustomerProfileCard';
import { mapBerthApplicationLanguageToLanguage } from '../../features/applicationView/utils';

export const canDeleteApplication = (status: ApplicationStatus) => {
  return ![ApplicationStatus.HANDLED, ApplicationStatus.OFFER_SENT, ApplicationStatus.EXPIRED].includes(status);
};

export const canUnlinkCustomer = (status: ApplicationStatus) => {
  return status === ApplicationStatus.PENDING;
};

export const getApplicantDetails = (
  application: BERTH_APPLICATION | WINTER_STORAGE_APPLICATION | WINTER_STORAGE_NOTICE
): CustomerProfileCardProps => {
  const {
    firstName,
    lastName,
    address,
    zipCode,
    municipality,
    phoneNumber,
    email,
    businessId,
    companyName,
    language,
  } = application;
  const customerGroup = businessId ? CustomerGroup.COMPANY : CustomerGroup.PRIVATE;

  return {
    firstName: firstName,
    lastName: lastName,
    primaryAddress: {
      address: address,
      postalCode: zipCode,
      city: municipality,
    },
    primaryPhone: phoneNumber,
    primaryEmail: email,
    // TODO: Error propped up after re-generating types
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    language: mapBerthApplicationLanguageToLanguage(language),
    customerGroup,
    ...(businessId && {
      organization: {
        businessId,
        name: companyName,
        address,
        city: municipality,
        postalCode: zipCode,
      },
    }),
  };
};
