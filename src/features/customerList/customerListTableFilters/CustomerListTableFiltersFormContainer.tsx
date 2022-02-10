import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { atomFamily, useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { FILTER_OPTIONS } from '../__generated__/FILTER_OPTIONS';
import { FILTER_OPTIONS_QUERY } from '../queries';
import CustomerListTableFiltersForm from './CustomerListTableFiltersForm';
import { CustomerGroup, LeaseStatus } from '../../../@types/__generated__/globalTypes';
import useListTableFilters from './useListTableFilters';
import { CustomerListTableFilters } from './types';
import { createIntervalString, createIntervalWithSilentError } from './utils';

export type Option = {
  label: string;
  value: string;
};

const controlledFiltersEmptyValues = {
  customerGroups: [],
  boatTypeIds: [],
  leaseStatuses: [],
  harborIds: [],
  pierId: undefined,
  berthId: undefined,
  winterStorageGridAreaIds: [],
  winterStoragePlaceId: undefined,
  winterStorageAreaIds: [],
  startDate: undefined,
  endDate: undefined,
  moreThanOneBerthOrWinterStorage: undefined,
};

export type ControlledFilters = Omit<CustomerListTableFilters, 'dateInterval'> & {
  startDate?: string;
  endDate?: string;
};

const filtersAtomFamily = atomFamily<ControlledFilters, CustomerListTableFilters>({
  key: 'CustomerListTableFilters_filtersAtom',
  default: ({ dateInterval, ...delegated }) => {
    const { start, end } = createIntervalWithSilentError(dateInterval);

    return {
      ...controlledFiltersEmptyValues,
      ...delegated,
      startDate: start,
      endDate: end,
    };
  },
});

interface Props {
  onFormClose: () => void;
}

const CustomerListTableFiltersContainer = ({ onFormClose }: Props) => {
  const { t } = useTranslation();
  const [listTableFilters, setListTableFilters] = useListTableFilters();
  const [filters, setFilters] = useRecoilState(filtersAtomFamily(listTableFilters));
  const queryByHarborId = filters.harborIds.length === 1 ? filters.harborIds[0] : null;
  const queryByWinterStorageGridAreaId =
    filters.winterStorageGridAreaIds.length === 1 ? filters.winterStorageGridAreaIds[0] : null;
  const { data } = useQuery<FILTER_OPTIONS>(FILTER_OPTIONS_QUERY, {
    fetchPolicy: 'no-cache',
    variables: {
      harborId: queryByHarborId,
      pierId: filters.pierId,
      winterStorageGridAreaId: queryByWinterStorageGridAreaId || '',
      skipPiers: !queryByHarborId,
      skipBerths: !queryByHarborId || !filters.pierId,
      skipWinterStorageGridArea: !queryByWinterStorageGridAreaId,
    },
  });

  const customerGroupOptions = (Object.keys(CustomerGroup) as Array<keyof typeof CustomerGroup>)
    .map((key) => ({
      label: t(`common.customerGroups.${key}`),
      value: CustomerGroup[key],
    }))
    ?.sort(alphabeticalOptionSort);
  const boatTypeOptions = data?.boatTypes
    ?.map(
      (boatType): Option => ({
        value: boatType.id,
        label: boatType.name as string,
      })
    )
    ?.sort(alphabeticalOptionSort);
  const leaseStatusOptions = (Object.keys(LeaseStatus) as Array<keyof typeof LeaseStatus>)
    .map((key) => ({
      label: t(`common.leaseStatus.${key.toLocaleLowerCase()}`),
      value: LeaseStatus[key],
    }))
    ?.sort(alphabeticalOptionSort);
  const harborOptions = data?.harbors?.edges
    ?.map(
      (harborEdge): Option => ({
        value: harborEdge?.node?.id ?? '',
        label: harborEdge?.node?.properties?.name ?? '',
      })
    )
    ?.sort(alphabeticalOptionSort);
  const pierOptions = data?.piers?.edges
    ?.map(
      (pierEdge): Option => ({
        value: pierEdge?.node?.id ?? '',
        label: pierEdge?.node?.properties?.identifier ?? '',
      })
    )
    ?.sort(alphabeticalOptionSort);
  const berthOptions = data?.berths?.edges
    ?.map(
      (berthEdge): Option => ({
        value: berthEdge?.node?.id ?? '',
        label: berthEdge?.node?.number ?? '',
      })
    )
    ?.sort(alphabeticalOptionSort);
  const winterStorageAreaOptions = data?.winterStorageAreas?.edges
    ?.map(
      (winterStorageArea): Option => ({
        value: winterStorageArea?.node?.id ?? '',
        label: winterStorageArea?.node?.properties?.name ?? '',
      })
    )
    ?.sort(alphabeticalOptionSort);
  const winterStorageGridAreaOptions = data?.winterStorageAreas?.edges
    // Grid areas are those winter storage areas that do not have unmarked spaces
    ?.filter((winterStorageAreaEdge) => !winterStorageAreaEdge?.node?.properties?.estimatedNumberOfUnmarkedSpaces)
    ?.map(
      (winterStorageArea): Option => ({
        value: winterStorageArea?.node?.id ?? '',
        label: winterStorageArea?.node?.properties?.name ?? '',
      })
    )
    ?.sort(alphabeticalOptionSort);

  const winterStoragePlaceOptions = data?.winterStorageGridArea?.properties?.sections?.edges
    ?.flatMap((winterStorageSection) =>
      winterStorageSection?.node?.properties?.places?.edges?.map(
        (placeEdge): Option => ({
          value: placeEdge?.node?.id ?? '',
          label: placeEdge?.node?.number?.toString() ?? '',
        })
      )
    )
    .filter((option): option is Option => Boolean(option))
    ?.sort(alphabeticalOptionSort);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFilters((prev) => ({
      ...prev,
      [e.target.name]: nextValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, filters: ControlledFilters) => {
    e.preventDefault();

    const { startDate, endDate, ...delegated } = filters;

    setListTableFilters({
      ...delegated,
      dateInterval: createIntervalString({
        start: startDate,
        end: endDate,
      }),
    });
    onFormClose();
  };

  const handleReset = (...fieldsToReset: (keyof ControlledFilters)[]) => {
    const resetFields = fieldsToReset.reduce(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: controlledFiltersEmptyValues[fieldName],
      }),
      {}
    );

    setFilters((prev) => ({
      ...prev,
      ...resetFields,
    }));
  };

  return (
    <CustomerListTableFiltersForm
      customerGroupOptions={customerGroupOptions}
      boatTypeOptions={boatTypeOptions}
      leaseStatusOptions={leaseStatusOptions}
      harborOptions={harborOptions}
      pierOptions={pierOptions}
      berthOptions={berthOptions}
      winterStorageAreaOptions={winterStorageAreaOptions}
      winterStoragePlaceOptions={winterStoragePlaceOptions}
      winterStorageGridAreaOptions={winterStorageGridAreaOptions}
      filters={filters}
      onFieldChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};

const alphabeticalOptionSort = (a: Option, b: Option) => a.label.localeCompare(b.label);

export default CustomerListTableFiltersContainer;
