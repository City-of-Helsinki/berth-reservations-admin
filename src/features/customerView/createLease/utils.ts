import { CREATE_BERTH_LEASE_MODAL } from './__generated__/CREATE_BERTH_LEASE_MODAL';
import { CREATE_WINTER_STORAGE_LEASE_MODAL } from './__generated__/CREATE_WINTER_STORAGE_LEASE_MODAL';
import { Option } from './types';

const sortOptions = (a: Option, b: Option) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

type EdgeWithProperties = {
  node: {
    id: string;
    properties: {
      name: string | null;
    } | null;
  } | null;
};

const getOptionFromEdgeWithProperties = (edge?: EdgeWithProperties | null): Option | null => {
  if (!edge?.node?.properties?.name) {
    return null;
  }

  return {
    label: edge.node.properties.name,
    value: edge.node.id,
  };
};

export const getHarborOptions = (data: CREATE_BERTH_LEASE_MODAL | undefined): Option[] =>
  data?.harbors?.edges
    ?.reduce<Option[]>((acc, edge) => {
      const option = getOptionFromEdgeWithProperties(edge);

      return option ? [...acc, option] : acc;
    }, [])
    .sort(sortOptions) || [];

export const getAreaOptions = (data: CREATE_WINTER_STORAGE_LEASE_MODAL | undefined): Option[] =>
  data?.winterStorageAreas?.edges
    ?.reduce<Option[]>((acc, edge) => {
      const option = getOptionFromEdgeWithProperties(edge);

      return option ? [...acc, option] : acc;
    }, [])
    .sort(sortOptions) || [];

export const getBoatsOptions = (
  data: CREATE_BERTH_LEASE_MODAL | CREATE_WINTER_STORAGE_LEASE_MODAL | undefined
): Option[] =>
  data?.profile?.boats?.edges.reduce<Option[]>((acc, edge) => {
    if (!edge?.node) return acc;
    return [...acc, { label: edge.node.name, value: edge.node.id }];
  }, []) ?? [];
