import { useApolloClient } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';

import { exportClient } from '../../app/exportClient';
import hdsToast from '../toast/hdsToast';
import { getProfileToken } from './auth';
import { downloadFile } from './downloadFile';
import { assertUnreachable, typedBoolean } from './tsUtils';

export const useTableExport = () => {
  const apolloClient = useApolloClient();

  // Used to paginate through all pages to get all list ids for export
  const exportTable: ExportTable = async ({ exportType, fileType, fetchCallback }) => {
    const entityIds = [];
    const pageSize = 100;
    let _hasNextPage = true;
    let after: string | null = null;

    try {
      while (_hasNextPage) {
        const { edges, pageInfo } = (await fetchCallback(apolloClient, { first: pageSize, after })) ?? {};
        const { endCursor, hasNextPage } = pageInfo ?? {};
        const nodes = edges?.map((edge) => edge?.node?.id).filter(typedBoolean) ?? [];
        entityIds.push(...nodes);
        after = endCursor as string;
        _hasNextPage = Boolean(hasNextPage);
      }
      await fetchExportFile({
        exportType,
        fileType,
        ids: entityIds,
      });
    } catch (e) {
      hdsToast({
        type: 'error',
        labelText: 'notification.error.label',
        text: 'notification.error.description',
        translated: true,
      });
    }

    return null;
  };

  return {
    exportTable,
  };
};

export const fetchExportFile = async ({
  exportType,
  fileType = 'xlsx',
  ids,
}: {
  exportType: ExportType;
  fileType: FileType;
  ids: string[];
}) => {
  try {
    const response = await exportClient.post(
      `/${exportType}/${fileType}/`,
      {
        ids,
        // eslint-disable-next-line @typescript-eslint/camelcase
        profile_token: getProfileToken(),
      },
      {
        responseType: 'blob',
      }
    );
    await downloadFile(response.data, getFileName(fileType, exportType));
  } catch (e) {
    hdsToast({
      type: 'error',
      labelText: 'notification.error.label',
      text: 'notification.error.description',
    });
  }
};

const getFileName = (fileType: FileType, exportType: ExportType) => {
  switch (fileType) {
    case 'xlsx':
      return `${exportType}.xlsx`;
    default:
      return assertUnreachable(fileType);
  }
};

type Maybe<T> = T | undefined | null;

type PageInfo = { hasNextPage: boolean; endCursor: string | null };

type FetchReturnValue = {
  count?: Maybe<number>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<
    Maybe<{
      node: Maybe<{
        id: string;
      }>;
    }>[]
  >;
};

type FetchCallback = (
  apolloClient: ApolloClient<object>,
  params: { after: string | null; first: number }
) => Promise<Maybe<FetchReturnValue>>;

type ExportType =
  | 'customers'
  | 'berth-applications'
  | 'winter-storage-applications'
  | 'unmarked-winter-storage-applications';
type FileType = 'xlsx';

type ExportTable = (params: {
  exportType: ExportType;
  fileType: FileType;
  fetchCallback: FetchCallback;
}) => Promise<string[] | null>;
