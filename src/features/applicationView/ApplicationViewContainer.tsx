import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import ApplicationView, { SearchBy } from './ApplicationView';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { INDIVIDUAL_APPLICATION_QUERY, FILTERED_CUSTOMERS_QUERY } from './queries';
import {
  INDIVIDUAL_APPLICATION,
  INDIVIDUAL_APPLICATIONVariables as INDIVIDUAL_APPLICATION_VARS,
} from './__generated__/INDIVIDUAL_APPLICATION';
import { useDeleteBerthApplication } from '../../common/mutations/deleteBerthApplication';
import {
  FILTERED_CUSTOMERS,
  FILTERED_CUSTOMERSVariables as FILTERED_CUSTOMERS_VARS,
} from './__generated__/FILTERED_CUSTOMERS';
import { UPDATE_BERTH_APPLICATION_MUTATION, CREATE_NEW_PROFILE_MUTATION } from './mutations';
import {
  UPDATE_BERTH_APPLICATION,
  UPDATE_BERTH_APPLICATIONVariables as UPDATE_BERTH_APPLICATION_VARS,
} from './__generated__/UPDATE_BERTH_APPLICATION';
import {
  CREATE_NEW_PROFILE,
  CREATE_NEW_PROFILEVariables as CREATE_NEW_PROFILE_VARS,
} from './__generated__/CREATE_NEW_PROFILE';
import { getApplicationDetailsData, getCustomerProfile, getFilteredCustomersData, getOfferDetailsData } from './utils';
import { usePagination } from '../../common/utils/usePagination';
import { usePrevious } from '../../common/utils/usePrevious';
import { useBackendSorting } from '../../common/utils/useBackendSorting';

const ApplicationViewContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [searchBy, setSearchBy] = useState<SearchBy>(SearchBy.LAST_NAME);
  const [searchVal, setSearchVal] = useState<string>('');

  const { loading, data } = useQuery<INDIVIDUAL_APPLICATION, INDIVIDUAL_APPLICATION_VARS>(
    INDIVIDUAL_APPLICATION_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { orderBy, handleSortedColChange } = useBackendSorting(() => goToPage(0));

  const [debouncedSearchVal] = useDebounce(searchVal, 500, {
    equalityFn: (prev, next) => prev === next,
    leading: true,
  });

  const prevSearchBy = usePrevious(searchBy);

  const filteredCustomersVars: FILTERED_CUSTOMERS_VARS = {
    first: pageSize,
    after: cursor,
    orderBy,
    [searchBy]: prevSearchBy === searchBy ? debouncedSearchVal : searchVal,
  };

  const [fetchFilteredCustomers, { data: customersData, called, loading: loadingCustomers }] = useLazyQuery<
    FILTERED_CUSTOMERS,
    FILTERED_CUSTOMERS_VARS
  >(FILTERED_CUSTOMERS_QUERY, {
    variables: filteredCustomersVars,
  });

  const [deleteDraftedApplication] = useDeleteBerthApplication();
  useEffect(() => {
    if (!data?.berthApplication) return;

    setSearchVal(data.berthApplication[searchBy]);
  }, [data, searchBy]);

  const customer = data?.berthApplication?.customer;

  useEffect(() => {
    // Only fetch customers if the application doesn't have an attached customer.
    if (!customer && !loading && !called) {
      fetchFilteredCustomers();
    }
  }, [customer, loading, called, fetchFilteredCustomers]);

  useEffect(() => {
    // Go to the first page when search values change.
    if (!customer && !loading) {
      goToPage(0);
    }
  }, [searchVal, searchBy, customer, loading, goToPage]);

  const [linkCustomer] = useMutation<UPDATE_BERTH_APPLICATION, UPDATE_BERTH_APPLICATION_VARS>(
    UPDATE_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [
        {
          query: INDIVIDUAL_APPLICATION_QUERY,
          variables: {
            id,
          },
        },
      ],
    }
  );

  const [createNewCustomer] = useMutation<CREATE_NEW_PROFILE, CREATE_NEW_PROFILE_VARS>(CREATE_NEW_PROFILE_MUTATION, {
    refetchQueries: [
      {
        query: FILTERED_CUSTOMERS_QUERY,
        variables: filteredCustomersVars,
      },
    ],
  });

  if (loading || !data?.berthApplication) return <LoadingSpinner isLoading={true} />;

  const handleDeleteLease = (id: string) => {
    deleteDraftedApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const customerProfile = customer ? getCustomerProfile(customer) : null;

  const applicationDetailsData = getApplicationDetailsData(data.berthApplication, data.boatTypes || []);

  const filteredCustomersData = !customer ? getFilteredCustomersData(customersData) : null;

  const applicationDetails = { ...applicationDetailsData, handleDeleteLease };

  const offerDetails = data.berthApplication.lease
    ? {
        ...getOfferDetailsData(data.berthApplication.lease),
        handleDeleteLease,
      }
    : null;

  const handleLinkCustomer = (customerId: string) =>
    linkCustomer({
      variables: {
        input: { id, customerId },
      },
    });

  const handleCreateCustomer = () => {
    const { firstName, lastName, primaryAddress, primaryEmail, primaryPhone } = applicationDetails.applicant;
    const phone = primaryPhone || '';
    const email = primaryEmail || '';
    const address = primaryAddress?.address || '';
    const postalCode = primaryAddress?.postalCode || '';
    const city = primaryAddress?.city || '';

    createNewCustomer({
      variables: {
        firstName,
        lastName,
        address,
        postalCode,
        city,
        phone,
        email,
      },
    });
  };

  return (
    <ApplicationView
      applicationId={id}
      handleLinkCustomer={handleLinkCustomer}
      loadingCustomers={loadingCustomers}
      customerTableTools={{
        searchVal,
        searchBy,
        setSearchVal,
        setSearchBy: (searchBy) => {
          setSearchBy(searchBy);
          setSearchVal(data?.berthApplication?.[searchBy] ?? '');
        },
        handleCreateCustomer,
        searchByOptions: [
          { value: SearchBy.FIRST_NAME, label: t('common.firstName') },
          { value: SearchBy.LAST_NAME, label: t('common.lastName') },
          { value: SearchBy.EMAIL, label: t('common.email') },
          { value: SearchBy.ADDRESS, label: t('common.address') },
        ],
      }}
      pagination={{
        forcePage: pageIndex,
        pageCount: getPageCount(customersData?.profiles?.count),
        onPageChange: ({ selected }) => goToPage(selected),
      }}
      onSortedColChange={handleSortedColChange({ name: 'lastName' })}
      similarCustomersData={filteredCustomersData}
      customerProfile={customerProfile}
      applicationDetails={applicationDetails}
      offerDetails={offerDetails}
    />
  );
};

export default ApplicationViewContainer;